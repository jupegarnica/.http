var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var nearley = createCommonjsModule(function(module) {
  (function(root, factory) {
    if (module.exports) {
      module.exports = factory();
    } else {
      root.nearley = factory();
    }
  })(commonjsGlobal, function() {
    function Rule2(name, symbols, postprocess) {
      this.id = ++Rule2.highestId;
      this.name = name;
      this.symbols = symbols;
      this.postprocess = postprocess;
      return this;
    }
    Rule2.highestId = 0;
    Rule2.prototype.toString = function(withCursorAt) {
      var symbolSequence = typeof withCursorAt === "undefined" ? this.symbols.map(getSymbolShortDisplay).join(" ") : this.symbols.slice(0, withCursorAt).map(getSymbolShortDisplay).join(" ") + " \u25CF " + this.symbols.slice(withCursorAt).map(getSymbolShortDisplay).join(" ");
      return this.name + " \u2192 " + symbolSequence;
    };
    function State(rule, dot, reference, wantedBy) {
      this.rule = rule;
      this.dot = dot;
      this.reference = reference;
      this.data = [];
      this.wantedBy = wantedBy;
      this.isComplete = this.dot === rule.symbols.length;
    }
    State.prototype.toString = function() {
      return "{" + this.rule.toString(this.dot) + "}, from: " + (this.reference || 0);
    };
    State.prototype.nextState = function(child) {
      var state = new State(this.rule, this.dot + 1, this.reference, this.wantedBy);
      state.left = this;
      state.right = child;
      if (state.isComplete) {
        state.data = state.build();
        state.right = void 0;
      }
      return state;
    };
    State.prototype.build = function() {
      var children = [];
      var node = this;
      do {
        children.push(node.right.data);
        node = node.left;
      } while (node.left);
      children.reverse();
      return children;
    };
    State.prototype.finish = function() {
      if (this.rule.postprocess) {
        this.data = this.rule.postprocess(this.data, this.reference, Parser2.fail);
      }
    };
    function Column(grammar, index) {
      this.grammar = grammar;
      this.index = index;
      this.states = [];
      this.wants = {};
      this.scannable = [];
      this.completed = {};
    }
    Column.prototype.process = function(nextColumn) {
      var states = this.states;
      var wants = this.wants;
      var completed = this.completed;
      for (var w = 0; w < states.length; w++) {
        var state = states[w];
        if (state.isComplete) {
          state.finish();
          if (state.data !== Parser2.fail) {
            var wantedBy = state.wantedBy;
            for (var i = wantedBy.length; i--; ) {
              var left = wantedBy[i];
              this.complete(left, state);
            }
            if (state.reference === this.index) {
              var exp = state.rule.name;
              (this.completed[exp] = this.completed[exp] || []).push(state);
            }
          }
        } else {
          var exp = state.rule.symbols[state.dot];
          if (typeof exp !== "string") {
            this.scannable.push(state);
            continue;
          }
          if (wants[exp]) {
            wants[exp].push(state);
            if (completed.hasOwnProperty(exp)) {
              var nulls = completed[exp];
              for (var i = 0; i < nulls.length; i++) {
                var right = nulls[i];
                this.complete(state, right);
              }
            }
          } else {
            wants[exp] = [state];
            this.predict(exp);
          }
        }
      }
    };
    Column.prototype.predict = function(exp) {
      var rules = this.grammar.byName[exp] || [];
      for (var i = 0; i < rules.length; i++) {
        var r = rules[i];
        var wantedBy = this.wants[exp];
        var s = new State(r, 0, this.index, wantedBy);
        this.states.push(s);
      }
    };
    Column.prototype.complete = function(left, right) {
      var copy = left.nextState(right);
      this.states.push(copy);
    };
    function Grammar2(rules, start) {
      this.rules = rules;
      this.start = start || this.rules[0].name;
      var byName = this.byName = {};
      this.rules.forEach(function(rule) {
        if (!byName.hasOwnProperty(rule.name)) {
          byName[rule.name] = [];
        }
        byName[rule.name].push(rule);
      });
    }
    Grammar2.fromCompiled = function(rules, start) {
      var lexer = rules.Lexer;
      if (rules.ParserStart) {
        start = rules.ParserStart;
        rules = rules.ParserRules;
      }
      var rules = rules.map(function(r) {
        return new Rule2(r.name, r.symbols, r.postprocess);
      });
      var g = new Grammar2(rules, start);
      g.lexer = lexer;
      return g;
    };
    function StreamLexer() {
      this.reset("");
    }
    StreamLexer.prototype.reset = function(data, state) {
      this.buffer = data;
      this.index = 0;
      this.line = state ? state.line : 1;
      this.lastLineBreak = state ? -state.col : 0;
    };
    StreamLexer.prototype.next = function() {
      if (this.index < this.buffer.length) {
        var ch = this.buffer[this.index++];
        if (ch === "\n") {
          this.line += 1;
          this.lastLineBreak = this.index;
        }
        return {value: ch};
      }
    };
    StreamLexer.prototype.save = function() {
      return {
        line: this.line,
        col: this.index - this.lastLineBreak
      };
    };
    StreamLexer.prototype.formatError = function(token, message) {
      var buffer = this.buffer;
      if (typeof buffer === "string") {
        var lines = buffer.split("\n").slice(Math.max(0, this.line - 5), this.line);
        var nextLineBreak = buffer.indexOf("\n", this.index);
        if (nextLineBreak === -1)
          nextLineBreak = buffer.length;
        var col = this.index - this.lastLineBreak;
        var lastLineDigits = String(this.line).length;
        message += " at line " + this.line + " col " + col + ":\n\n";
        message += lines.map(function(line, i) {
          return pad(this.line - lines.length + i + 1, lastLineDigits) + " " + line;
        }, this).join("\n");
        message += "\n" + pad("", lastLineDigits + col) + "^\n";
        return message;
      } else {
        return message + " at index " + (this.index - 1);
      }
      function pad(n, length) {
        var s = String(n);
        return Array(length - s.length + 1).join(" ") + s;
      }
    };
    function Parser2(rules, start, options) {
      if (rules instanceof Grammar2) {
        var grammar = rules;
        var options = start;
      } else {
        var grammar = Grammar2.fromCompiled(rules, start);
      }
      this.grammar = grammar;
      this.options = {
        keepHistory: false,
        lexer: grammar.lexer || new StreamLexer()
      };
      for (var key in options || {}) {
        this.options[key] = options[key];
      }
      this.lexer = this.options.lexer;
      this.lexerState = void 0;
      var column = new Column(grammar, 0);
      var table = this.table = [column];
      column.wants[grammar.start] = [];
      column.predict(grammar.start);
      column.process();
      this.current = 0;
    }
    Parser2.fail = {};
    Parser2.prototype.feed = function(chunk) {
      var lexer = this.lexer;
      lexer.reset(chunk, this.lexerState);
      var token;
      while (true) {
        try {
          token = lexer.next();
          if (!token) {
            break;
          }
        } catch (e) {
          var nextColumn = new Column(this.grammar, this.current + 1);
          this.table.push(nextColumn);
          var err = new Error(this.reportLexerError(e));
          err.offset = this.current;
          err.token = e.token;
          throw err;
        }
        var column = this.table[this.current];
        if (!this.options.keepHistory) {
          delete this.table[this.current - 1];
        }
        var n = this.current + 1;
        var nextColumn = new Column(this.grammar, n);
        this.table.push(nextColumn);
        var literal = token.text !== void 0 ? token.text : token.value;
        var value = lexer.constructor === StreamLexer ? token.value : token;
        var scannable = column.scannable;
        for (var w = scannable.length; w--; ) {
          var state = scannable[w];
          var expect = state.rule.symbols[state.dot];
          if (expect.test ? expect.test(value) : expect.type ? expect.type === token.type : expect.literal === literal) {
            var next = state.nextState({data: value, token, isToken: true, reference: n - 1});
            nextColumn.states.push(next);
          }
        }
        nextColumn.process();
        if (nextColumn.states.length === 0) {
          var err = new Error(this.reportError(token));
          err.offset = this.current;
          err.token = token;
          throw err;
        }
        if (this.options.keepHistory) {
          column.lexerState = lexer.save();
        }
        this.current++;
      }
      if (column) {
        this.lexerState = lexer.save();
      }
      this.results = this.finish();
      return this;
    };
    Parser2.prototype.reportLexerError = function(lexerError) {
      var tokenDisplay, lexerMessage;
      var token = lexerError.token;
      if (token) {
        tokenDisplay = "input " + JSON.stringify(token.text[0]) + " (lexer error)";
        lexerMessage = this.lexer.formatError(token, "Syntax error");
      } else {
        tokenDisplay = "input (lexer error)";
        lexerMessage = lexerError.message;
      }
      return this.reportErrorCommon(lexerMessage, tokenDisplay);
    };
    Parser2.prototype.reportError = function(token) {
      var tokenDisplay = (token.type ? token.type + " token: " : "") + JSON.stringify(token.value !== void 0 ? token.value : token);
      var lexerMessage = this.lexer.formatError(token, "Syntax error");
      return this.reportErrorCommon(lexerMessage, tokenDisplay);
    };
    Parser2.prototype.reportErrorCommon = function(lexerMessage, tokenDisplay) {
      var lines = [];
      lines.push(lexerMessage);
      var lastColumnIndex = this.table.length - 2;
      var lastColumn = this.table[lastColumnIndex];
      var expectantStates = lastColumn.states.filter(function(state) {
        var nextSymbol = state.rule.symbols[state.dot];
        return nextSymbol && typeof nextSymbol !== "string";
      });
      if (expectantStates.length === 0) {
        lines.push("Unexpected " + tokenDisplay + ". I did not expect any more input. Here is the state of my parse table:\n");
        this.displayStateStack(lastColumn.states, lines);
      } else {
        lines.push("Unexpected " + tokenDisplay + ". Instead, I was expecting to see one of the following:\n");
        var stateStacks = expectantStates.map(function(state) {
          return this.buildFirstStateStack(state, []) || [state];
        }, this);
        stateStacks.forEach(function(stateStack) {
          var state = stateStack[0];
          var nextSymbol = state.rule.symbols[state.dot];
          var symbolDisplay = this.getSymbolDisplay(nextSymbol);
          lines.push("A " + symbolDisplay + " based on:");
          this.displayStateStack(stateStack, lines);
        }, this);
      }
      lines.push("");
      return lines.join("\n");
    };
    Parser2.prototype.displayStateStack = function(stateStack, lines) {
      var lastDisplay;
      var sameDisplayCount = 0;
      for (var j = 0; j < stateStack.length; j++) {
        var state = stateStack[j];
        var display = state.rule.toString(state.dot);
        if (display === lastDisplay) {
          sameDisplayCount++;
        } else {
          if (sameDisplayCount > 0) {
            lines.push("    ^ " + sameDisplayCount + " more lines identical to this");
          }
          sameDisplayCount = 0;
          lines.push("    " + display);
        }
        lastDisplay = display;
      }
    };
    Parser2.prototype.getSymbolDisplay = function(symbol) {
      return getSymbolLongDisplay(symbol);
    };
    Parser2.prototype.buildFirstStateStack = function(state, visited) {
      if (visited.indexOf(state) !== -1) {
        return null;
      }
      if (state.wantedBy.length === 0) {
        return [state];
      }
      var prevState = state.wantedBy[0];
      var childVisited = [state].concat(visited);
      var childResult = this.buildFirstStateStack(prevState, childVisited);
      if (childResult === null) {
        return null;
      }
      return [state].concat(childResult);
    };
    Parser2.prototype.save = function() {
      var column = this.table[this.current];
      column.lexerState = this.lexerState;
      return column;
    };
    Parser2.prototype.restore = function(column) {
      var index = column.index;
      this.current = index;
      this.table[index] = column;
      this.table.splice(index + 1);
      this.lexerState = column.lexerState;
      this.results = this.finish();
    };
    Parser2.prototype.rewind = function(index) {
      if (!this.options.keepHistory) {
        throw new Error("set option `keepHistory` to enable rewinding");
      }
      this.restore(this.table[index]);
    };
    Parser2.prototype.finish = function() {
      var considerations = [];
      var start = this.grammar.start;
      var column = this.table[this.table.length - 1];
      column.states.forEach(function(t) {
        if (t.rule.name === start && t.dot === t.rule.symbols.length && t.reference === 0 && t.data !== Parser2.fail) {
          considerations.push(t);
        }
      });
      return considerations.map(function(c) {
        return c.data;
      });
    };
    function getSymbolLongDisplay(symbol) {
      var type = typeof symbol;
      if (type === "string") {
        return symbol;
      } else if (type === "object") {
        if (symbol.literal) {
          return JSON.stringify(symbol.literal);
        } else if (symbol instanceof RegExp) {
          return "character matching " + symbol;
        } else if (symbol.type) {
          return symbol.type + " token";
        } else if (symbol.test) {
          return "token matching " + String(symbol.test);
        } else {
          throw new Error("Unknown symbol type: " + symbol);
        }
      }
    }
    function getSymbolShortDisplay(symbol) {
      var type = typeof symbol;
      if (type === "string") {
        return symbol;
      } else if (type === "object") {
        if (symbol.literal) {
          return JSON.stringify(symbol.literal);
        } else if (symbol instanceof RegExp) {
          return symbol.toString();
        } else if (symbol.type) {
          return "%" + symbol.type;
        } else if (symbol.test) {
          return "<" + String(symbol.test) + ">";
        } else {
          throw new Error("Unknown symbol type: " + symbol);
        }
      }
    }
    return {
      Parser: Parser2,
      Grammar: Grammar2,
      Rule: Rule2
    };
  });
});
var Grammar = nearley.Grammar;
var Parser = nearley.Parser;
var Rule = nearley.Rule;
export default nearley;
export {Grammar, Parser, Rule, nearley as __moduleExports};

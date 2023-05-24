"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.ts
var import_express2 = __toESM(require("express"));

// src/routers/rom.ts
var import_express = require("express");

// src/sqlite3/sql.ts
function setWhere(where) {
  return where && where.length > 0 ? "WHERE " + where.reduce((pre, cur) => {
    return pre + " AND " + cur;
  }) : "";
}
var setSelectSql = (option) => {
  let sql = "SELECT ";
  if (typeof option.select === "string") {
    sql += option.select + " ";
  } else {
    option.select.forEach((item, i) => {
      if (i === option.select.length - 1) {
        sql += `${item} `;
      } else {
        sql += `${item}, `;
      }
    });
  }
  sql += `FROM ${option.from} `;
  sql += setWhere(option.where);
  if (option.order) {
    sql += ` ORDER BY ${option.order.by} ${option.order.sort}`;
  }
  if (option.limit) {
    const count = Number(option.limit.count);
    const page = Number(option.limit.page);
    sql += ` LIMIT ${count * (page - 1)}, ${count}`;
  }
  return sql;
};

// src/sqlite3/index.ts
var import_sqlite3 = __toESM(require("sqlite3"));

// src/server.config.ts
var import_path = require("path");
var dbPath = "../db/nes.sqlite3";
var romPath = "../roms";
var romDir = "/roms/";
var imgDir = "/roms/img/";
var port = 8848;
var baseURL = `http://localhost:${port}`;
var getDataBasePath = () => (0, import_path.join)(__dirname, dbPath);
var getRomPath = () => (0, import_path.join)(__dirname, romPath);

// node_modules/.pnpm/kolorist@1.8.0/node_modules/kolorist/dist/esm/index.mjs
var enabled = true;
var globalVar = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
var supportLevel = 0;
if (globalVar.process && globalVar.process.env && globalVar.process.stdout) {
  const { FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM, COLORTERM } = globalVar.process.env;
  if (NODE_DISABLE_COLORS || NO_COLOR || FORCE_COLOR === "0") {
    enabled = false;
  } else if (FORCE_COLOR === "1" || FORCE_COLOR === "2" || FORCE_COLOR === "3") {
    enabled = true;
  } else if (TERM === "dumb") {
    enabled = false;
  } else if ("CI" in globalVar.process.env && [
    "TRAVIS",
    "CIRCLECI",
    "APPVEYOR",
    "GITLAB_CI",
    "GITHUB_ACTIONS",
    "BUILDKITE",
    "DRONE"
  ].some((vendor) => vendor in globalVar.process.env)) {
    enabled = true;
  } else {
    enabled = process.stdout.isTTY;
  }
  if (enabled) {
    if (process.platform === "win32") {
      supportLevel = 3;
    } else {
      if (COLORTERM && (COLORTERM === "truecolor" || COLORTERM === "24bit")) {
        supportLevel = 3;
      } else if (TERM && (TERM.endsWith("-256color") || TERM.endsWith("256"))) {
        supportLevel = 2;
      } else {
        supportLevel = 1;
      }
    }
  }
}
var options = {
  enabled,
  supportLevel
};
function kolorist(start, end, level = 1) {
  const open = `\x1B[${start}m`;
  const close = `\x1B[${end}m`;
  const regex = new RegExp(`\\x1b\\[${end}m`, "g");
  return (str) => {
    return options.enabled && options.supportLevel >= level ? open + ("" + str).replace(regex, open) + close : "" + str;
  };
}
var reset = kolorist(0, 0);
var bold = kolorist(1, 22);
var dim = kolorist(2, 22);
var italic = kolorist(3, 23);
var underline = kolorist(4, 24);
var inverse = kolorist(7, 27);
var hidden = kolorist(8, 28);
var strikethrough = kolorist(9, 29);
var black = kolorist(30, 39);
var red = kolorist(31, 39);
var green = kolorist(32, 39);
var yellow = kolorist(33, 39);
var blue = kolorist(34, 39);
var magenta = kolorist(35, 39);
var cyan = kolorist(36, 39);
var white = kolorist(97, 39);
var gray = kolorist(90, 39);
var lightGray = kolorist(37, 39);
var lightRed = kolorist(91, 39);
var lightGreen = kolorist(92, 39);
var lightYellow = kolorist(93, 39);
var lightBlue = kolorist(94, 39);
var lightMagenta = kolorist(95, 39);
var lightCyan = kolorist(96, 39);
var bgBlack = kolorist(40, 49);
var bgRed = kolorist(41, 49);
var bgGreen = kolorist(42, 49);
var bgYellow = kolorist(43, 49);
var bgBlue = kolorist(44, 49);
var bgMagenta = kolorist(45, 49);
var bgCyan = kolorist(46, 49);
var bgWhite = kolorist(107, 49);
var bgGray = kolorist(100, 49);
var bgLightRed = kolorist(101, 49);
var bgLightGreen = kolorist(102, 49);
var bgLightYellow = kolorist(103, 49);
var bgLightBlue = kolorist(104, 49);
var bgLightMagenta = kolorist(105, 49);
var bgLightCyan = kolorist(106, 49);
var bgLightGray = kolorist(47, 49);

// src/utils/logger.ts
var info = function(str) {
  console.log(green(str));
};
var warn = function(str) {
  console.log(yellow(str));
};
var error = function(str) {
  console.log(red(str));
  process.exit(0);
};
var logger_default = {
  info,
  warn,
  error
};

// src/sqlite3/index.ts
var sqlite3 = import_sqlite3.default.verbose();
var db = new sqlite3.Database(getDataBasePath());
db.allAsync = (sql, parmas) => {
  return new Promise((resolve, reject) => {
    db.all(sql, parmas, (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
};
db.runAsync = (sql, params) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
};
async function dispatchResponse(target, res, message, err) {
  message = message ?? "\u53D1\u751F\u9519\u8BEF";
  try {
    await target();
  } catch (e) {
    logger_default.error(`${e}`);
    if (err) {
      err();
    }
    res.send({
      code: 500,
      msg: message
    });
  }
}
var sqlite3_default = db;

// src/utils/response.ts
function sendEmpty(res, target) {
  res.send({
    code: 400,
    message: `${target}\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A`
  });
}

// src/utils/query.ts
function checkQuery(query) {
  if (typeof query === "string") {
    return query.trim() !== "";
  }
  return query !== void 0 && query !== null;
}
function resolveURL(str) {
  return baseURL + str;
}
function resolveRomData(rom) {
  rom.url = resolveURL(romDir + rom.url);
  rom.cover = resolveURL(imgDir + rom.cover);
  rom.image = resolveURL(imgDir + rom.image);
  console.log(rom.url);
}

// src/routers/rom.ts
var roms = (0, import_express.Router)();
roms.get("/categorys", async (_, res) => {
  await dispatchResponse(async () => {
    const categorys = await sqlite3_default.allAsync(setSelectSql({
      select: ["id", "name"],
      from: "categorys"
    }));
    res.send({
      code: 200,
      categorys
    });
  }, res);
});
var selectList = ["roms.id", "title", "cover", "image", "language", "type", "source", "comment", "location", "categorys.name as category", "size", "publisher", "url"];
var selectFrom = "roms join categorys on roms.type=categorys.id";
roms.get("/romlist", async (req, res) => {
  let { cat, keyword, page, limit } = req.query;
  cat ??= "";
  keyword ??= "";
  page ??= "1";
  limit ??= "20";
  const sqlOptions = {
    select: "count(*) as count",
    from: selectFrom,
    where: []
  };
  if (checkQuery(keyword)) {
    sqlOptions.where?.push(`(\`title\` like '%${decodeURI(keyword)}%')`);
  }
  if (checkQuery(cat)) {
    sqlOptions.where?.push(`type='${cat}'`);
  }
  await dispatchResponse(async () => {
    const rows = await sqlite3_default.allAsync(setSelectSql(sqlOptions));
    sqlOptions.select = selectList;
    sqlOptions.limit = {
      page,
      count: limit
    };
    const result = await sqlite3_default.allAsync(setSelectSql(sqlOptions));
    result.forEach((rom) => {
      resolveRomData(rom);
    });
    res.send({
      code: 200,
      result,
      count: rows[0].count
    });
  }, res);
});
roms.get("/random", async (req, res) => {
  let { n, cat, ignore } = req.query;
  n ??= "8";
  const sqlOptions = {
    select: selectList,
    from: selectFrom,
    order: {
      by: "RANDOM()",
      sort: "asc"
    },
    limit: {
      page: 1,
      count: n
    },
    where: []
  };
  if (checkQuery(cat)) {
    sqlOptions.where?.push(`type='${cat}'`);
  }
  if (checkQuery(ignore)) {
    sqlOptions.where?.push(`roms.id<>${ignore}`);
  }
  await dispatchResponse(async () => {
    const result = await sqlite3_default.allAsync(setSelectSql(sqlOptions));
    result.forEach((rom) => {
      resolveRomData(rom);
    });
    res.send({ code: 200, result });
  }, res);
});
roms.get("/rom", async (req, res) => {
  const id = req.query.id;
  if (!checkQuery(id)) {
    sendEmpty(res, "id");
    return;
  }
  const sql = {
    select: selectList,
    from: selectFrom,
    where: [`roms.id='${id}'`]
  };
  await dispatchResponse(async () => {
    const roms2 = await sqlite3_default.allAsync(setSelectSql(sql));
    if (roms2.length === 1) {
      resolveRomData(roms2[0]);
      res.send({
        code: 200,
        rom: roms2[0]
      });
    } else {
      res.send({ code: 400 });
    }
  }, res);
});
roms.get("/suggestions", async (req, res) => {
  const keyword = req.query.keyword;
  const sql = {
    select: ["id", "title", "cover"],
    from: "roms"
  };
  if (checkQuery(keyword)) {
    sql.where = [`(\`title\` like '%${decodeURI(keyword)}%')`];
  } else {
    sendEmpty(res, "keyword");
    return;
  }
  await dispatchResponse(async () => {
    const result = await sqlite3_default.allAsync(setSelectSql(sql));
    if (result.length > 0) {
      const suggestions = result.map((game) => {
        return {
          id: game.id,
          value: game.title,
          cover: resolveURL(imgDir + game.cover)
        };
      });
      res.send({
        code: 200,
        suggestions
      });
    } else {
      res.send({ code: 0 });
    }
  }, res);
});
roms.get("/banner", async (_, res) => {
  const sql = {
    select: ["roms.id as id", "image", "banner.title as title"],
    from: "banner join roms on banner.id=roms.id"
  };
  await dispatchResponse(async () => {
    const banner = await sqlite3_default.allAsync(setSelectSql(sql));
    banner.forEach((item) => {
      item.image = resolveURL(imgDir + item.image);
    });
    res.send({
      code: 200,
      banner
    });
  }, res);
});
var rom_default = roms;

// src/index.ts
var setHeaders = function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
};
var app = (0, import_express2.default)();
app.use(import_express2.default.json());
app.use(setHeaders);
app.use("/roms", import_express2.default.static(getRomPath()));
app.use(rom_default);
app.listen(port, () => {
  logger_default.info(`server: http://localhost:${port} is running...`);
});
//# sourceMappingURL=index.js.map
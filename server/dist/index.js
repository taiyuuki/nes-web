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
var import_express4 = __toESM(require("express"));

// src/routers/rom_router.ts
var import_express = require("express");

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
var error = function(str) {
  console.log(red(str));
  process.exit(0);
};

// src/utils/response.ts
var import_os = __toESM(require("os"));
function sendEmpty(res, target) {
  res.send({
    code: 400,
    message: `${target}\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A`
  });
}
async function dispatchResponse(target, res, message, err) {
  message = message ?? "\u53D1\u751F\u9519\u8BEF";
  try {
    await target();
  } catch (e) {
    error(`${e}`);
    if (err) {
      err(e);
    }
    res.send({
      code: 500,
      msg: message
    });
  }
}
function getIpAddress() {
  const ifaces = import_os.default.networkInterfaces();
  for (const dev in ifaces) {
    const iface = ifaces[dev];
    for (let i = 0; i < iface.length; i++) {
      const { family, address, internal } = iface[i];
      if (family === "IPv4" && address !== "127.0.0.1" && !internal) {
        return address;
      }
    }
  }
}

// src/server.config.ts
var import_path = require("path");
var dbPath = "../db/nes.sqlite3";
var romPath = "../roms";
var romDir = "/roms/";
var imgDir = "/roms/img/";
var hostIp = getIpAddress();
var getDataBasePath = () => (0, import_path.join)(__dirname, dbPath);
var getRomPath = () => (0, import_path.join)(__dirname, romPath);
var port = 8848;
var baseURL = `http://localhost:${port}`;
if (process.env.NODE_ENV === "development") {
  baseURL = `http://${hostIp}:${port}`;
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
  return {
    id: rom.id,
    category: rom.Category.dataValues.type,
    url: resolveURL(romDir + rom.url),
    cover: resolveURL(imgDir + rom.cover),
    image: resolveURL(imgDir + rom.image),
    title: rom.title,
    language: rom.language,
    type: rom.type,
    source: rom.source,
    comment: rom.comment,
    location: rom.location,
    size: rom.size,
    publisher: rom.publisher
  };
}

// src/services/roms_service.ts
var import_sequelize4 = require("sequelize");

// src/sequelize/models/categorys_model.ts
var import_sequelize2 = require("sequelize");

// src/sequelize/index.ts
var import_sequelize = require("sequelize");
var sequelize = new import_sequelize.Sequelize({
  dialect: "sqlite",
  storage: getDataBasePath(),
  logging() {
    return;
  }
});
var sequelize_default = sequelize;

// src/sequelize/models/categorys_model.ts
var Categorys = class extends import_sequelize2.Model {
};
var categorys_model = Categorys.init({
  id: {
    type: import_sequelize2.DataTypes.TEXT,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: import_sequelize2.DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize: sequelize_default,
  tableName: "categorys",
  freezeTableName: true,
  createdAt: false,
  updatedAt: false
});
categorys_model.sync();

// src/sequelize/models/roms_model.ts
var import_sequelize3 = require("sequelize");
function textField() {
  return {
    type: import_sequelize3.DataTypes.TEXT,
    allowNull: false
  };
}
var Roms = class extends import_sequelize3.Model {
};
var roms_model = Roms.init(
  {
    id: {
      type: import_sequelize3.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: textField(),
    cover: textField(),
    image: textField(),
    language: textField(),
    type: textField(),
    source: textField(),
    comment: textField(),
    location: textField(),
    size: textField(),
    publisher: textField(),
    url: textField()
  },
  {
    sequelize: sequelize_default,
    modelName: "roms",
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  }
);
roms_model.belongsTo(categorys_model, { foreignKey: "type", targetKey: "id" });
roms_model.sync();

// src/services/roms_service.ts
async function getRomlist(cat, keyword, page, limit) {
  const where = {};
  if (checkQuery(keyword)) {
    where.title = {
      [import_sequelize4.Op.like]: `%${keyword}%`
    };
  }
  if (checkQuery(cat)) {
    where.type = cat;
  }
  const result = await roms_model.findAndCountAll({
    attributes: ["id", "title", "cover", "image", "language", "type", "source", "comment", "location", "size", "publisher", "url"],
    include: {
      model: categorys_model,
      attributes: [["name", "type"]]
    },
    offset: (+page - 1) * +limit,
    limit: +limit,
    where
  });
  return {
    result: result.rows.map((rom) => {
      return resolveRomData(rom);
    }),
    count: result.count
  };
}
async function getRomById(id) {
  const romInfo = await roms_model.findByPk(id);
  if (romInfo) {
    romInfo.url = resolveURL(romDir + romInfo.url);
    romInfo.image = resolveURL(imgDir + romInfo.image);
    romInfo.cover = resolveURL(imgDir + romInfo.cover);
  }
  return romInfo;
}
async function getRandomList(n, cat, ignore) {
  const where = {};
  if (checkQuery(cat)) {
    where.type = cat;
  }
  if (checkQuery(ignore)) {
    where.id = { [import_sequelize4.Op.ne]: ignore };
  }
  const result = await roms_model.findAll({
    attributes: ["id", "title", "cover", "image", "language", "type", "source", "comment", "location", "size", "publisher", "url"],
    include: {
      model: categorys_model,
      attributes: [["name", "type"]]
    },
    order: [[(0, import_sequelize4.fn)("RANDOM"), "ASC"]],
    offset: 1,
    limit: +n,
    where
  });
  return result.map((rom) => {
    return resolveRomData(rom);
  });
}
async function getSuggestions(keyword) {
  const result = await roms_model.findAll({
    attributes: ["id", "title", "cover"],
    where: {
      title: {
        [import_sequelize4.Op.like]: `%${keyword}%`
      }
    }
  });
  return result;
}

// src/routers/rom_router.ts
var roms = (0, import_express.Router)();
roms.get("/romlist", async (req, res) => {
  let { cat, keyword, page, limit } = req.query;
  cat ??= "";
  keyword ??= "";
  page ??= "1";
  limit ??= "20";
  await dispatchResponse(async () => {
    const list = await getRomlist(cat, keyword, +page, +limit);
    res.send({
      code: 200,
      result: list.result,
      count: list.count
    });
  }, res);
});
roms.get("/random", async (req, res) => {
  let { n, cat, ignore } = req.query;
  n ??= "8";
  await dispatchResponse(async () => {
    const result = await getRandomList(n, cat, ignore);
    res.send({ code: 200, result });
  }, res);
});
roms.get("/rom", async (req, res) => {
  const id = req.query.id;
  if (!checkQuery(id)) {
    sendEmpty(res, "id");
    return;
  }
  await dispatchResponse(async () => {
    const rom = await getRomById(id);
    if (rom) {
      res.send({
        code: 200,
        rom
      });
    } else {
      res.send({ code: 400 });
    }
  }, res);
});
roms.get("/suggestions", async (req, res) => {
  const keyword = req.query.keyword;
  if (checkQuery(keyword)) {
    await dispatchResponse(async () => {
      const result = await getSuggestions(keyword);
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
  } else {
    sendEmpty(res, "keyword");
    return;
  }
});
var rom_router_default = roms;

// src/routers/categorys_router.ts
var import_express2 = require("express");

// src/services/categorys_service.ts
async function getAllCategorys() {
  const result = await categorys_model.findAll();
  return result;
}

// src/routers/categorys_router.ts
var categorys = (0, import_express2.Router)();
categorys.get("/categorys", async (_, res) => {
  await dispatchResponse(async () => {
    const reslult = await getAllCategorys();
    res.send({
      code: 200,
      categorys: reslult
    });
  }, res);
});
var categorys_router_default = categorys;

// src/routers/banner_router.ts
var import_express3 = require("express");

// src/sequelize/models/banner_model.ts
var import_sequelize5 = require("sequelize");
var Banner = class extends import_sequelize5.Model {
};
var banner_model = Banner.init({
  id: {
    type: import_sequelize5.DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: import_sequelize5.DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize: sequelize_default,
  tableName: "banner",
  freezeTableName: true,
  createdAt: false,
  updatedAt: false
});
banner_model.belongsTo(roms_model, { foreignKey: "id", targetKey: "id" });
banner_model.sync();

// src/services/banner_service.ts
async function getBanner() {
  const result = await banner_model.findAll({
    attributes: ["id", "title"],
    include: {
      model: roms_model,
      attributes: ["image"]
    }
  });
  return result.map(({ rom, title, id }) => {
    return {
      id,
      image: resolveURL(imgDir + rom.image),
      title
    };
  });
}

// src/routers/banner_router.ts
var banner = (0, import_express3.Router)();
banner.get("/banner", async (_, res) => {
  await dispatchResponse(async () => {
    const banner2 = await getBanner();
    res.send({
      code: 200,
      banner: banner2
    });
  }, res);
});
var banner_router_default = banner;

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
var app = (0, import_express4.default)();
app.use(import_express4.default.json()).use(setHeaders).use("/roms", import_express4.default.static(getRomPath())).use(categorys_router_default).use(rom_router_default).use(banner_router_default);
if (process.env.NODE_ENV === "development") {
  app.set("host", hostIp);
}
app.listen(port, () => {
  info(`server: ${baseURL}`);
});
//# sourceMappingURL=index.js.map
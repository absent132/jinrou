// Generated by CoffeeScript 1.6.3
(function() {
  var Shared, normal1, normal2, teams;

  Shared = {
    game: exports
  };

  exports.jobs = ["Human", "Werewolf", "Diviner", "Psychic", "Madman", "Guard", "Couple", "Fox", "Poisoner", "BigWolf", "TinyFox", "Cat", "Fanatic", "Immoral", "Devil", "ToughGuy", "Cupid", "Stalker", "OccultMania", "WhisperingMad", "Lover", "Dog", "Bat", "Noble", "Slave", "Magician", "Spy", "WolfDiviner", "Fugitive", "Merchant", "QueenSpectator", "MadWolf", "Liar", "Spy2", "Copier", "Cursed", "ApprenticeSeer", "Diseased", "Spellcaster", "Lycan", "Priest", "Prince", "PI", "Sorcerer", "Doppleganger", "CultLeader", "Vampire", "LoneWolf", "Witch", "Oldman", "Tanner", "WolfCub", "Thief", "Hoodlum", "Dictator", "SeersMama", "Trapper", "WolfBoy", "RedHood"];

  exports.nonhumans = ["Werewolf", "Fox", "BigWolf", "TinyFox", "WolfDiviner", "MadWolf", "Devil", "Vampire", "LoneWolf", "WolfCub"];

  exports.blacks = ["Werewolf", "WolfDiviner", "MadWolf", "Lycan", "LoneWolf", "WolfCub", "Dog"];

  exports.teams = teams = {
    Human: ["Human", "Diviner", "Psychic", "Guard", "Couple", "Poisoner", "ToughGuy", "Noble", "Slave", "Magician", "Fugitive", "Merchant", "QueenSpectator", "MadWolf", "Liar", "Copier", "Light", "Cursed", "ApprenticeSeer", "Diseased", "Spellcaster", "Lycan", "Priest", "Prince", "PI", "Cat", "Witch", "Oldman", "OccultMania", "Dog", "Dictator", "SeersMama", "Trapper", "RedHood"],
    Werewolf: ["Werewolf", "Madman", "BigWolf", "Fanatic", "Spy", "WolfDiviner", "Spy2", "Sorcerer", "LoneWolf", "MinionSelector", "WolfCub", "WhisperingMad", "WolfBoy"],
    Fox: ["Fox", "TinyFox", "Immoral"],
    Bat: ["Bat"],
    Devil: ["Devil"],
    Friend: ["Cupid", "Lover"],
    Others: ["Stalker", "Doppleganger", "CultLeader", "Vampire", "Tanner", "Thief", "Hoodlum", "QuantumPlayer"],
    Neet: ["Neet"]
  };

  exports.categories = {
    Human: teams.Human,
    Werewolf: ["Werewolf", "BigWilf", "WolfDiviner", "LoneWolf", "WolfCub"],
    Fox: ["Fox", "TinyFox"],
    Madman: ["Madman", "Fanatic", "Spy", "Spy2", "Sorcerer", "WhisperingMad", "WolfBoy"],
    Switching: ["Stalker", "OccultMania", "Copier", "Cursed", "Doppleganger"],
    Others: ["Devil", "Cupid", "Bat", "CultLeader", "Vampire", "Tanner", "Lover", "Hoodlum"]
  };

  exports.categoryNames = {
    Human: "村人系",
    Werewolf: "人狼系",
    Fox: "妖狐系",
    Madman: "狂人系",
    Switching: "役職変化系",
    Others: "第三陣営系"
  };

  normal1 = function(number) {
    var ret;
    ret = {};
    ret.Werewolf = 1;
    if (number >= 8) {
      ret.Werewolf++;
      if (number >= 13) {
        ret.Werewolf++;
        if (number >= 20) {
          ret.Werewolf++;
          if (number >= 25) {
            ret.Werewolf++;
            if (number >= 30) {
              ret.Werewolf++;
            }
          }
        }
      }
    }
    ret.Diviner = 1;
    if (number >= 22) {
      ret.Diviner++;
    }
    if (number > 4) {
      ret.Psychic = 1;
    }
    if (number >= 6) {
      ret.Madman = 1;
      ret.Guard = 1;
      if ((18 <= number && number <= 19) || number >= 23) {
        ret.Madman++;
      }
      if (number >= 20) {
        ret.Guard++;
      }
    }
    if (number >= 13) {
      ret.Couple = 2;
      if (number >= 18) {
        ret.Couple++;
      }
    }
    if (number >= 11) {
      ret.Fox = 1;
      if (number >= 19) {
        ret.Fox++;
      }
    }
    return ret;
  };

  normal2 = function(number) {
    var ret;
    ret = {};
    ret.Werewolf = 1;
    if (number >= 8) {
      ret.Werewolf++;
      if (number >= 16) {
        ret.Werewolf++;
        if (number >= 20) {
          ret.Werewolf++;
          if (number >= 25) {
            ret.Werewolf++;
            if (number >= 29) {
              ret.Werewolf++;
            }
          }
        }
      }
    }
    ret.Diviner = 1;
    if (number > 4) {
      ret.Psychic = 1;
    }
    if (number >= 10) {
      ret.Madman = 1;
      if (number >= 28) {
        ret.Madman++;
      }
    }
    if (number >= 11) {
      ret.Guard = 1;
    }
    if (number >= 13) {
      ret.Couple = 2;
      if (number >= 28) {
        ret.Couple++;
      }
    }
    if (number >= 15) {
      ret.Fox = 1;
    }
    return ret;
  };

  exports.jobrules = [
    {
      name: "普通配役",
      rule: [
        {
          name: "普通1",
          title: "少人数でも楽しめる配役。",
          rule: normal1
        }, {
          name: "普通2",
          title: "一般的な配役。",
          rule: normal2
        }, {
          name: "普通3",
          title: "少人数でも狐が出る配役。",
          rule: function(number) {
            var ret;
            ret = normal1(number);
            if (ret.Fox == null) {
              ret.Fox = 0;
            }
            ret.Fox++;
            if (number < 10 && ret.Werewolf > 1) {
              ret.Werewolf--;
            }
            return ret;
          }
        }
      ]
    }, {
      name: "特殊役職配役",
      rule: [
        {
          name: "恋人",
          title: "恋人が出る配役。",
          rule: function(number) {
            var ret;
            ret = normal1(number);
            if (ret.Fox > 0) {
              ret.Fox--;
            }
            if (ret.Cupid == null) {
              ret.Cupid = 0;
            }
            ret.Cupid++;
            return ret;
          }
        }, {
          name: "背徳者",
          title: "背徳者が出る配役。",
          rule: function(number) {
            var ret;
            ret = normal1(number);
            if (ret.Fox > 0) {
              if (ret.Immoral == null) {
                ret.Immoral = 0;
              }
              ret.Immoral += 1;
            }
            return ret;
          }
        }, {
          name: "猫又あり",
          title: "猫又が出る配役。",
          rule: function(number) {
            var ret;
            ret = normal1(number);
            ret.Cat = 1;
            ret.Werewolf++;
            return ret;
          }
        }, {
          name: "囁き狂人",
          title: "狂人の代わりに囁き狂人が出る配役。",
          rule: function(number) {
            var ret;
            ret = normal1(number);
            if (ret.Madman > 0) {
              ret.WhisperingMad = 1;
              ret.Madman--;
            }
            return ret;
          }
        }
      ]
    }, {
      name: "桃栗配役",
      rule: [
        {
          name: "こうもり",
          title: "こうもりが入る配役。",
          rule: function(number) {
            var ret;
            ret = normal1(number);
            ret.Bat = 1;
            if (number >= 10) {
              ret.Bat++;
              if (number >= 16) {
                ret.Bat++;
              }
            }
            return ret;
          }
        }, {
          name: "貴族奴隷",
          title: "貴族奴隷が入る配役。",
          rule: function(number) {
            var ret;
            ret = normal1(number);
            ret.Noble = 1;
            ret.Slave = 1;
            if (ret.Couple >= 2) {
              ret.Couple = 0;
            }
            if (number >= 14) {
              ret.Slave++;
              if (number >= 20) {
                ret.Slave++;
                if (number >= 23) {
                  ret.Noble++;
                }
              }
            }
            return ret;
          }
        }, {
          name: "魔術師",
          title: "魔術師が入る配役。",
          rule: function(number) {
            var ret;
            ret = normal1(number);
            ret.Magician = 1;
            return ret;
          }
        }, {
          name: "スパイ",
          title: "スパイが入る配役。",
          rule: function(number) {
            var ret;
            ret = normal1(number);
            ret.Spy = 1;
            if (number < 10 && ret.Madman > 0) {
              ret.Madman--;
            }
            return ret;
          }
        }, {
          name: "人狼占い",
          title: "人狼占いが入る配役。",
          rule: function(number) {
            var ret;
            ret = normal1(number);
            ret.Werewolf--;
            ret.WolfDiviner = 1;
            if (number >= 7) {
              ret.Fox++;
            }
            return ret;
          }
        }, {
          name: "商人",
          title: "商人が入る配役。",
          rule: function(number) {
            var ret;
            ret = normal1(number);
            ret.Merchant = 1;
            return ret;
          }
        }
      ]
    }, {
      name: "その他",
      rule: [
        {
          name: "狂った世界",
          title: "狂人が多い。",
          rule: function(number) {
            var count, ret;
            ret = {};
            count = 3;
            ret.Werewolf = 1;
            ret.Diviner = 1;
            ret.Guard = 1;
            if (number >= 9) {
              ret.Werewolf++;
              count++;
              if (number >= 15) {
                ret.Werewolf++;
                count++;
              }
            }
            if (number >= 10) {
              ret.Psychic++;
              count++;
            }
            if (number >= 12) {
              ret.Fox++;
              count++;
            }
            ret.Madman = number - count;
            return ret;
          }
        }, {
          name: "六つ巴人狼",
          title: "6つの勢力がひしめく。",
          rule: function(number) {
            var ret;
            ret = {};
            ret.Diviner = 1;
            ret.Psychic = 1;
            ret.Guard = 1;
            ret.Madman = 1;
            ret.Werewolf = 2;
            ret.Fox = 1;
            ret.Devil = 1;
            ret.Cupid = 1;
            ret.Copier = 1;
            if (number >= 14) {
              ret.Priest = 1;
              ret.Doppleganger = 1;
            }
            if (number >= 16) {
              ret.Stalker = 1;
              ret.Bat = 1;
            }
            if (number >= 18) {
              ret.Werewolf++;
            }
            if (number >= 20) {
              ret.ApprenticeSeer = 1;
              ret.Fox++;
            }
            if (number >= 23) {
              ret.Vampire = 1;
            }
            if (number >= 25) {
              ret.Werewolf++;
            }
            if (number >= 27) {
              ret.WolfDiviner = 1;
              ret.Werewolf--;
              ret.Immoral = 1;
            }
            if (number >= 29) {
              ret.Noble = 1;
              ret.Slave = 1;
            }
            if (number >= 30) {
              ret.Werewolf--;
              ret.LoneWolf = 1;
            }
            if (number >= 35) {
              ret.Werewolf++;
            }
            if (number >= 36) {
              ret.Fox++;
            }
            if (number >= 38) {
              ret.Vampire++;
            }
            return ret;
          }
        }
      ]
    }
  ];

  exports.getrulefunc = function(name) {
    var branch, names, obj, _i, _len, _ref;
    if (name === "内部利用.量子人狼") {
      return function(number) {
        var ret;
        ret = {};
        ret.Werewolf = 1;
        if (number >= 8) {
          ret.Werewolf++;
          if (number >= 13) {
            ret.Werewolf++;
            if (number >= 20) {
              ret.Werewolf++;
              if (number >= 25) {
                ret.Werewolf++;
                if (number >= 30) {
                  ret.Werewolf++;
                }
              }
            }
          }
        }
        ret.Diviner = 1;
        return ret;
      };
    }
    names = name.split(".");
    obj = Shared.game.jobrules;
    for (_i = 0, _len = names.length; _i < _len; _i++) {
      branch = names[_i];
      obj = (_ref = obj.filter(function(x) {
        return x.name === branch;
      })[0]) != null ? _ref.rule : void 0;
      if (!obj) {
        return;
      }
    }
    if (typeof obj !== "function") {
      return;
    }
    return obj;
  };

  exports.getrulestr = function(rule, jobs) {
    var job, name, num, text, type, _i, _len, _ref, _ref1;
    if (jobs == null) {
      jobs = {};
    }
    text = "";
    if (rule === "特殊ルール.闇鍋") {
      return "闇鍋 / 人狼" + jobs.Werewolf + " 妖狐" + jobs.Fox;
    }
    text = "" + (rule.split('.').pop()) + " / ";
    _ref = Shared.game.jobs;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      job = _ref[_i];
      if (job === "Human" && rule === "特殊ルール.一部闇鍋") {
        continue;
      }
      num = jobs[job];
      if (!parseInt(num)) {
        continue;
      }
      text += "" + (Shared.game.getjobname(job)) + num + " ";
    }
    _ref1 = Shared.game.categoryNames;
    for (type in _ref1) {
      name = _ref1[type];
      num = jobs["category_" + type];
      if (num > 0) {
        text += "" + name + num + " ";
      }
    }
    return text;
  };

  exports.getjobname = function(job) {
    var name, team, _ref;
    _ref = Shared.game.jobinfo;
    for (name in _ref) {
      team = _ref[name];
      if (team[job] != null) {
        return team[job].name;
      }
    }
    return null;
  };

  exports.jobinfo = {
    Human: {
      name: "村人陣営",
      color: "#00CC00",
      Human: {
        name: "村人",
        color: "#dddddd"
      },
      Diviner: {
        name: "占い師",
        color: "#00b3ff"
      },
      Psychic: {
        name: "霊能者",
        color: "#bb00ff"
      },
      Guard: {
        name: "狩人",
        color: "#969ad4"
      },
      Couple: {
        name: "共有者",
        color: "#ffffab"
      },
      Poisoner: {
        name: "埋毒者",
        color: "#853c24"
      },
      Noble: {
        name: "貴族",
        color: "#ffff00"
      },
      Slave: {
        name: "奴隷",
        color: "#1417d9"
      },
      Magician: {
        name: "魔術師",
        color: "#f03eba"
      },
      Fugitive: {
        name: "逃亡者",
        color: "#e8b279"
      },
      Merchant: {
        name: "商人",
        color: "#e06781"
      },
      QueenSpectator: {
        name: "女王観戦者",
        color: "#faeebe"
      },
      Liar: {
        name: "嘘つき",
        color: "#a3e4e6"
      },
      Copier: {
        name: "コピー",
        color: "#ffffff"
      },
      Light: {
        name: "デスノート",
        color: "#2d158c"
      },
      MadWolf: {
        name: "狂人狼",
        color: "#847430"
      },
      ToughGuy: {
        name: "タフガイ",
        color: "#ff5900"
      },
      Cursed: {
        name: "呪われた者",
        color: "#bda3bf"
      },
      ApprenticeSeer: {
        name: "見習い占い師",
        color: "#bfecff"
      },
      Diseased: {
        name: "病人",
        color: "#b35b98"
      },
      Spellcaster: {
        name: "呪いをかける者",
        color: "#4b4f7d"
      },
      Lycan: {
        name: "狼憑き",
        color: "#7d5f5f"
      },
      Priest: {
        name: "聖職者",
        color: "#fff94a"
      },
      Prince: {
        name: "プリンス",
        color: "#e5ff00"
      },
      PI: {
        name: "超常現象研究者",
        color: "#573670"
      },
      Cat: {
        name: "猫又",
        color: "#9200C7"
      },
      Witch: {
        name: "魔女",
        color: "#9200C7"
      },
      Oldman: {
        name: "老人",
        color: "#ede4b9"
      },
      OccultMania: {
        name: "オカルトマニア",
        color: "#edda8c"
      },
      Dog: {
        name: "犬",
        color: "#d4a152"
      },
      Dictator: {
        name: "独裁者",
        color: "#ff0000"
      },
      SeersMama: {
        name: "予言者のママ",
        color: "#ff9500"
      },
      Trapper: {
        name: "罠師",
        color: "#b58500"
      },
      RedHood: {
        name: "赤ずきん",
        color: "#ff2200"
      }
    },
    Werewolf: {
      name: "人狼陣営",
      color: "#DD0000",
      Werewolf: {
        name: "人狼",
        color: "#220000"
      },
      Madman: {
        name: "狂人",
        color: "#ffbb00"
      },
      BigWolf: {
        name: "大狼",
        color: "#660000"
      },
      Spy: {
        name: "スパイ",
        color: "#ad5d28"
      },
      WolfDiviner: {
        name: "人狼占い",
        color: "#5b0080"
      },
      Spy2: {
        name: "スパイⅡ",
        color: "#d3b959"
      },
      Fanatic: {
        name: "狂信者",
        color: "#94782b"
      },
      Sorcerer: {
        name: "妖術師",
        color: "#b91be0"
      },
      LoneWolf: {
        name: "一匹狼",
        color: "#222222"
      },
      MinionSelector: {
        name: "子分選択者",
        color: "#ffffff"
      },
      WolfCub: {
        name: "狼の子",
        color: "#662233"
      },
      WhisperingMad: {
        name: "囁き狂人",
        color: "#ccab52"
      },
      WolfBoy: {
        name: "狼少年",
        color: "5b2266"
      }
    },
    Fox: {
      name: "妖狐陣営",
      color: "#934293",
      Fox: {
        name: "妖狐",
        color: "#934293"
      },
      TinyFox: {
        name: "子狐",
        color: "#dd81f0"
      },
      Immoral: {
        name: "背徳者",
        color: "#5c2f5c"
      }
    },
    Bat: {
      name: "こうもり",
      color: "#000066",
      Bat: {
        name: "こうもり",
        color: "#000066"
      }
    },
    Devil: {
      name: "悪魔くん",
      color: "#735f9e",
      Devil: {
        name: "悪魔くん",
        color: "#735f9e"
      }
    },
    Friend: {
      name: "恋人陣営",
      color: "#ffb5e5",
      Cupid: {
        name: "キューピッド",
        color: "#ffb5e5"
      },
      Lover: {
        name: "求愛者",
        color: "#ffcfee"
      }
    },
    Others: {
      name: "その他",
      color: "#cccccc",
      Stalker: {
        name: "ストーカー",
        color: "#ad6628"
      },
      Doppleganger: {
        name: "ドッペルゲンガー",
        color: "#bbbbbb"
      },
      CultLeader: {
        name: "カルトリーダー",
        color: "#b09d87"
      },
      Vampire: {
        name: "ヴァンパイア",
        color: "#8f00bf"
      },
      Tanner: {
        name: "皮なめし職人",
        color: "#ede4b9"
      },
      Thief: {
        name: "盗人",
        color: "#a4a4a4"
      },
      Hoodlum: {
        name: "ならず者",
        color: "#88002d"
      }
    },
    Neet: {
      name: "ニート",
      color: "#aaaaaa",
      Neet: {
        name: "ニート",
        color: "#aaaaaa"
      }
    }
  };

}).call(this);

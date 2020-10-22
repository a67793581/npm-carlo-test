"use strict";
exports.__esModule = true;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
require("cerrie/init");
require("cerrie/livereload");
var Carlo = /** @class */ (function () {
    function Carlo() {
    }
    /**
     * 获取所有游戏中的玩家
     */
    Carlo.prototype.getAllPlayer = function () {
        var playerArray = [];
        for (var i = 0; i < 24; i++) {
            var p = Player(i);
            if (GetPlayerSlotState(p) == PLAYER_SLOT_STATE_PLAYING &&
                GetPlayerController(p) == MAP_CONTROL_USER) {
                playerArray[i] = p;
            }
        }
        return playerArray;
    };
    return Carlo;
}());

require("lualib_bundle");
local ____exports = {}
require("cerrie.init")
require("cerrie.livereload")
local Carlo = __TS__Class("Carlo")
Carlo.name = "Carlo"
function Carlo.prototype.____constructor(self)
end
function Carlo.prototype.getAllPlayer(self)
    local playerArray = {}
    do
        local i = 0
        while i < 24 do
            local p = Player(i)
            if (GetPlayerSlotState(p) == PLAYER_SLOT_STATE_PLAYING) and (GetPlayerController(p) == MAP_CONTROL_USER) then
                playerArray[i + 1] = p
            end
            i = i + 1
        end
    end
    return playerArray
end
return ____exports

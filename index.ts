// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "cerrie/init"
import "cerrie/livereload"
class Carlo {
    /**
     * 获取所有游戏中的玩家
     */
    getAllPlayer(): any {
        const playerArray: any[] = []
        for (let i = 0; i < 24; i++) {
            const p = Player(i)
            if (
                GetPlayerSlotState(p) == PLAYER_SLOT_STATE_PLAYING &&
                GetPlayerController(p) == MAP_CONTROL_USER
            ) {
                playerArray[i] = p
            }
        }
        return playerArray
    }
}
export default Carlo
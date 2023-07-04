export const config = {
    // 后端接口URL
    baseURL: 'http://192.168.9.2:8848',

    // 首页
    recentTotal: 8, // 最近游玩保存数量

    // 游戏列表页
    pageTotal: 20, // 每页显示数量
    cardSkeletonTotal: 12, // 骨架屏数量

    // 模拟器
    emulator: {
        saveTotal: 3, // 存档数量
        threshold: 0.2, // 虚拟摇杆的灵敏度
        degree: 45, // 虚拟摇杆斜向角度的范围
    },
    recomTotal: 10, // 推荐游戏数量
}

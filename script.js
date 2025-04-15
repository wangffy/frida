Java.perform(function () {
    // 获取目标类
    var SoLog = Java.use("cn.damai.utils.SoLog");

    // hook静态方法c
    SoLog.c.overload('android.content.Context', 'long').implementation = function (context, j) {
        // 你可以在这里打印参数
        console.log("SoLog.c called, forcing return true, arguments:", context, j);

        // 强制返回 true
        return true;
    };

    console.log("SoLog.c hooked");
});

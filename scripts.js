Java.perform(function () {
    let DmOrderActivity = Java.use("cn.damai.commonbusiness.seatbiz.sku.qilin.ui.NcovSkuActivity");

    DmOrderActivity.onCreate.implementation = function(bundle) {
        // 先调用原方法以确保逻辑完整性
        this.onCreate(bundle);

        // 获取Intent中的extras
        let intent = this.getIntent();
        
        let extras = intent.getExtras();

        if (extras) {
            console.log("Dumping Intent extras:");
            let keySet = extras.keySet();
            let iterator = keySet.iterator();

            // 遍历所有键
            while (iterator.hasNext()) {
                let key = iterator.next();
                try {
                    // 获取值并处理可能的异常类型
                    let value = extras.get(key);
                    console.log(`  [${key}] => ${value} (类型: ${value ? value.getClass().getName() : 'null'})`);
                } catch (e) {
                    console.log(`  [${key}] => 读取错误: ${e}`);
                }
            }
        } else {
            console.log("No extras found in Intent");
        }
    };
});


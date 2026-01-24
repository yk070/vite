const scriptLines = base.acTgObjs?.map(item => {
    if (typeof item == = "object" && item !== null) {
        // item がオブジェクトの場合のみ分解代入
        const { ac, tg } = item;
        return`$ {
            ac
        }
        - > $ {
            tg
        }
        `;
    } else {
        // 文字列などオブジェクトじゃない場合はそのまま返す
        return item;
    }
}) ?? [];

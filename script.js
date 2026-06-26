
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchForm = document.getElementById('searchForm');
    const searchItems = document.querySelectorAll('.search-item');

    // 検索を実行する関数
    function performSearch() {
        // 入力された文字を取得（大文字小文字の違いを無視するために小文字に変換）
        const keyword = searchInput.value.toLowerCase().trim();

        searchItems.forEach(function (item) {
            // カード内のすべてのテキスト（商品名や説明文など）を取得
            const itemText = item.textContent.toLowerCase();

            // キーワードが含まれているかチェック
            if (itemText.includes(keyword)) {
                // 含まれている場合は表示（Bootstrapの非表示クラス d-none を外す）
                item.classList.remove('d-none');
            } else {
                // 含まれていない場合は非表示（Bootstrapの非表示クラス d-none をつける）
                item.classList.add('d-none');
            }
        });
    }

    // パターンA: 検索ボタンがクリックされたとき
    searchButton.addEventListener('click', performSearch);

    // パターンB: 文字が入力されるたびにリアルタイムで絞り込む
    searchInput.addEventListener('input', performSearch);

    // パターンC: 検索窓でエンターキーが押されたときにページがリロードされるのを防ぐ
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        performSearch();
    });
});


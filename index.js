window.onload = function () {

    //accessing number grid and buttons from DOM
    const author = "Sahana";
    insertName();
    let list = document.getElementById("numberGrid");
    const shuffleBtn = document.getElementById("shuffleBtn");
    const sortBtn = document.getElementById("sortBtn");

    //binding click handlers
    shuffleBtn.onclick = () => onShuffleClick();
    sortBtn.onclick = () => onSortClick();

    //shuffle click handler
    function onShuffleClick() {
        const shuffledNodes = shuffle(list.children);
        appendToList(shuffledNodes);
    }

    //sort click handler
    function onSortClick() {
        const sortedNodes = sortNodes(list.children);
        appendToList(sortedNodes);
    }

    //function to shuffle
    function shuffle(items) {
        let shuffledArray = [...items];
        shuffledArray.forEach((element, i) => {
            const randomIndex = Math.floor(i * Math.random());
            [shuffledArray[randomIndex], shuffledArray[i]] = [shuffledArray[i], shuffledArray[randomIndex]];
        });
        return shuffledArray;
    }

    //function to sort nodes
    function sortNodes(items) {
        let sorteNodes = [...items];
        return sorteNodes.sort((a,b) => Number(a.innerHTML)-Number(b.innerHTML))
    }

    //append shuffled/sorted nodes
    function appendToList(nodes) {
        nodes.forEach((element) => {
            list.appendChild(element);
        });
    }

    //Insert name in credits
    function insertName() {
        let creditNode = document.getElementById("credit");
        const innerText = creditNode.innerHTML;
        if(innerText) {
            const match = innerText.match(/{{.*?}}/);
            if(match && match[0]) {
                creditNode.innerHTML = innerText.replace(match[0], author)
            }
        }
    }

    

} 
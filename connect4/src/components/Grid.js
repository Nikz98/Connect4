
const Grid = ({
    grid,
    handleGridSize,
    inputCells,
    setCells,
    inputRows,
    setRows,
}) => {
    const board =  [['0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0']]

    const cells = new Array(grid.cells).fill(0);
    const rows = new Array(grid.rows).fill(0);
    console.log(cells)

    const handleClick = (e) => {
        const item = e.target;
        if (item.classList.contains('selected')) {
        item.classList.remove('selected');
        } else {
        item.classList.add('selected');
        }
    };

    return (
        <main>

        {board.map((row, index) => (
            <ul className="row" key={index}>
            {board.map((cells, index) => (
                <li key={index} className="column" onClick={handleClick} />
            ))}
            </ul>
        ))}

        {/* <div>
            <label htmlFor="cells">Define cells in the row</label>
            <input
            type="text"
            placeholder="Define cells in the row"
            id="cells"
            value={inputCells}
            onChange={(e) => setCells(e.target.value)}
            />
        </div>

        <div>
            <label htmlFor="rows">Define rows</label>
            <input
            type="text"
            placeholder="Define rows"
            id="rows"
            value={inputRows}
            onChange={(e) => setRows(e.target.value)}
            />
        </div>

        <button onClick={handleGridSize}>Change Grid</button> */}
        </main>
    );
};

export default Grid;

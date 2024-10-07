export default function AnimatedCode() {
    // Rows of code "blocks", ml defines indentation
    const rows = [
        { blocks: [{ color: 'pink', width: 50 }, { color: 'yellow', width: 60 }, { color: 'grey', width: 10 }], ml: 0 },
        { blocks: [{ color: 'pink', width: 70 }, { color: 'yellow', width: 30 }, { color: 'red', width: 60 }, { color: 'grey', width: 10 }], ml: 6 },
        { blocks: [{ color: 'yellow', width: 40 }, { color: 'blue', width: 90 }, { color: 'grey', width: 10 }, { color: 'yellow', width: 30 }, { color: 'grey', width: 60 }, { color: 'grey', width: 10 }, { color: 'grey', width: 10 }], ml: 6 },
        { blocks: [{ color: 'red', width: 40 }, { color: 'grey', width: 10 }, { color: 'red', width: 60 }, { color: 'grey', width: 10 }, { color: 'grey', width: 60 }, { color: 'grey', width: 10 }], ml: 12 },
        { blocks: [{ color: 'grey', width: 10 }], ml: 6 },
        { blocks: [{ color: 'grey', width: 10 }], ml: 0 },
        { blocks: [{ color: 'pink', width: 50 }, { color: 'yellow', width: 40 }, { color: 'grey', width: 10 }], ml: 0 },
        { blocks: [{ color: 'pink', width: 60 }, { color: 'pink', width: 60 }, { color: 'yellow', width: 40 }, { color: 'blue', width: 40 }, { color: 'grey', width: 10 }, { color: 'yellow', width: 60 }, { color: 'grey', width: 50 }, { color: 'grey', width: 10 }], ml: 6 },
        { blocks: [{ color: 'yellow', width: 60 }, { color: 'red', width: 30 }, { color: 'grey', width: 10 }, { color: 'pink', width: 30 }, { color: 'blue', width: 60 }, { color: 'grey', width: 20 }], ml: 12 },
        { blocks: [{ color: 'red', width: 30 }, { color: 'grey', width: 10 }, { color: 'blue', width: 90 }, { color: 'grey', width: 10 }, { color: 'yellow', width: 10 }, { color: 'grey', width: 10 }], ml: 12 },
        { blocks: [{ color: 'red', width: 30 }, { color: 'grey', width: 10 }, { color: 'blue', width: 90 }, { color: 'grey', width: 10 }, { color: 'grey', width: 10 }], ml: 12 },
        { blocks: [{ color: 'grey', width: 10 }], ml: 6 },
        { blocks: [{ color: 'grey', width: 10 }], ml: 0 }
    ];

    return (
        <div className="flex flex-col bg-componentBackground p-2 rounded-lg shadow-lg -rotate-12">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className={`flex flex-row ml-${row.ml}`}>
                    {row.blocks.map((block, blockIndex) => (
                        <CodeBlock
                            key={blockIndex}
                            color={block.color}
                            width={block.width}
                            delay={blockIndex * 1}  // Increment delay for each block
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

function CodeBlock({ color, width, delay }) {
    const colorClass = `bg-${color}`;

    return (
        <div
            className={`${colorClass} h-4 m-2 rounded-md animate-pulse`}
            style={{ width: `${width}px`, animationDelay: `${delay}s` }}
        ></div>
    );
}

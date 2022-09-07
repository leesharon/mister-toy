export const dashboardService = {
    getToysInstockByLabel
}

function getToysInstockByLabel(toys) {
    if (!toys) return false
    const toysInstockByLabel = toys.reduce((acc, toy) => {
        if (toy.inStock) {
            if (!acc[toy.labels[0]]) {
                acc[toy.labels[0]] = 1
            } else {
                acc[toy.labels[0]]++
            }
        }
        return acc
    }, {})

    const labels = []
    const data = []
    let count = 0
    for (const key in toysInstockByLabel) {
        labels.push(key)
        if (!data[count]) data[count] = toysInstockByLabel[key]
        else data[count] += toysInstockByLabel[key]
        count++
    }
    return { labels, data }
}
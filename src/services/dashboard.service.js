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
    const labels = Object.keys(toysInstockByLabel)
    const data = Object.values(toysInstockByLabel)
    return { labels, data }
}
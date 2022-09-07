import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { dashboardService } from '../services/dashboard.service'

ChartJS.register(ArcElement, Tooltip, Legend)

export const MyChart = () => {

    const toys = useSelector(state => state.toyModule.toys)

    const dataMap = dashboardService.getToysInstockByLabel(toys)
    console.log('MyChart ~ dataMap', dataMap)

    if (!dataMap) return <h1>Loading...</h1>

    const data = {
        labels: dataMap['labels'],
        datasets: [
            {
                label: '# of Votes',
                data: dataMap['data'],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    return <section style={{ width: "70%", margin: "auto" }} className="in-stock-data">
        <h1>Percentages of Toys in Stock by Label</h1>
        <Doughnut data={data} />
    </section>
}

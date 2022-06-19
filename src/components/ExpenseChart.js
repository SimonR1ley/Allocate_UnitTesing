import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = () => {
    return (
        <div>
              <div className='chart-con'>
                    <h3 className='expense-chart-heading'>Expenses Chart</h3>
                    <div className="chart">
                        <Bar
                            data={{
                                labels: ["Unknown"],
                                datasets: [{
                                    label: 'Expenses',
                                    data: [1, 2, 3, 4, 5],
                                    backgroundColor: [
                                        '#FC6161',
                                        '#4DCEEA',
                                        '#EEE85C',
                                        '#82E26A',
                                        '#E15CF6',
                                        '#F6945C'
                                    ],
                                    borderColor: [
                                        '#FC6161',
                                        '#4DCEEA',
                                        '#EEE85C',
                                        '#82E26A',
                                        '#E15CF6',
                                        '#F6945C'
                                    ],
                                    borderWidth: 1
                                },

                                ],
                            }}
                            height={400}
                            width={700}
                            options={{
                                maintainAspectRatio: false, scales: {
                                    x: {
                                        ticks: {
                                            color: 'white'
                                        }
                                    },
                                    y: {
                                        ticks: {
                                            color: 'white'
                                        }
                                    }
                                }
                            }
                            }
                        />

                    </div>
                </div>
        </div>
    );
}

export default ExpenseChart;

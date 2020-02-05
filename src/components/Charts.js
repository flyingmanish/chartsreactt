import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Manish', 'Akash', 'Umeshji', 'Abhishek', 'Vivek', 'Vishal'],
                datasets:[
                    {
                        label:'population',
                        data:[
                            817594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95071
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 133, 0.9)',
                            'rgba(54, 162, 235, 0.9)',
                            'rgba(135, 182, 192, 0.9)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                        ]
                    }
                ]
            }
        }
    }
    

    render(){
        return (
            <div className="chart">
                <Bar
                data={this.state.chartData}
                options={{
                    title:{
                        display: true,
                        text: 'INDIA'
                        
                    },
                    responsive: true,
                    maintainAspectRatio: true
                
                }}>
                </Bar>
                
                                
            </div>
            
            

        )
    }

}

export default Chart;

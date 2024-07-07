import { Flex, Button } from "@mantine/core";
import React, { Component } from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceArea
} from "recharts";

const getAxisYDomain = (
    data: any,
    from: number,
    to: number,
    ref: string,
    offset: number
  ) => {
    debugger;
    const start = data.findIndex((sale: any) => sale.formatDate === from);
    const end = data.findIndex((sale: any) => sale.formatDate === to);
    const refData: any[] = data.slice(start, end)    
    let [bottom, top] = [refData[0][ref], refData[0][ref]];
  
    refData.forEach((d) => {
      if (d[ref] > top) top = d[ref];
      if (d[ref] < bottom) bottom = d[ref];
    });
  
    return [(bottom | 0) - offset, (top | 0) + offset];
  };

export default class AppGraph extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
        data: [],
        left: "dataMin",
        right: "dataMax",
        refAreaLeft: "",
        refAreaRight: "",
        top: "dataMax+1",
        bottom: "dataMin-1",
        top2: "dataMax+20",
        bottom2: "dataMin-20",
        animation: true
    };
  };

  zoom() {
    let { refAreaLeft, refAreaRight } = this.state;
    const { salesData } = this.props;
    if (refAreaLeft === refAreaRight || refAreaRight === "") {
      this.setState(() => ({
        refAreaLeft: "",
        refAreaRight: ""
      }));
      return;
    }

    if (refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    const [bottom, top] = getAxisYDomain(salesData, refAreaLeft, refAreaRight, "amount", 1);
    const [bottom2, top2] = getAxisYDomain(
        salesData,
        refAreaLeft,
        refAreaRight,
        "averageSale",
        50
    );

    this.setState(() => ({
      refAreaLeft: "",
      refAreaRight: "",
      data: salesData.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top,
      bottom2,
      top2
    }));
  }

  zoomOut() {
    const { salesData } = this.props;
    this.setState(() => ({
      data: salesData.slice(),
      refAreaLeft: "",
      refAreaRight: "",
      left: "dataMin",
      right: "dataMax",
      top: "dataMax+1",
      bottom: "dataMin",
      top2: "dataMax+50",
      bottom2: "dataMin+50"
    }));
  }

  render(): React.ReactNode {
    const {salesData} = this.props;
    let {
        data,
        left,
        right,
        refAreaLeft,
        refAreaRight,
        top,
        bottom,
        top2,
        bottom2
    } = this.state;

    data = salesData;

    return (
            <Flex
                direction={'column'}
                gap={'xs'}>
                <ComposedChart
                    width={900}
                    height={450}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                    onMouseDown={(e: any) =>
                        this.setState({ refAreaLeft: e.activeLabel })
                    }
                    onMouseMove={(e: any) =>
                        this.state.refAreaLeft &&
                        this.setState({ refAreaRight: e.activeLabel })
                    }
                    onMouseUp={this.zoom.bind(this)}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                    <XAxis allowDataOverflow dataKey="formatDate" domain={[left, right]}/>
                    <YAxis allowDataOverflow type="number" dataKey="amount" orientation={"left"} yAxisId={0} domain={[bottom, top]}/>
                    <YAxis allowDataOverflow type="number" dataKey="averageSale" orientation={"right"} yAxisId={1} domain={[bottom2, top2]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" name="total amount of sales" fill="#8884d8" yAxisId={0} animationDuration={300} />
                    <Line type="monotone" dataKey="averageSale" name="average amount of sales" stroke="#ff7300" yAxisId={1} animationDuration={300} />
                    {refAreaLeft && refAreaRight ? (
                        <ReferenceArea
                        yAxisId="1"
                        x1={refAreaLeft}
                        x2={refAreaRight}
                        strokeOpacity={0.3}
                        />
                    ) : null}
                </ComposedChart>
                <Button
                    style={{width: '15%', marginLeft: '80px', marginBottom: '20px'}}
                    onClick={this.zoomOut.bind(this)}
                    >Reset Zoom</Button>
            </Flex>
    );
  }
}

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

const DataFormatter = (value: any) => {
    return Math.round(value);
}

export default class AppGraph extends Component<any, any> {
    private readonly amountOffset = 100;
    private readonly totalSalesOffset = 2; 

  constructor(props: any) {
    super(props);
    const {salesData} = this.props;
    this.state = {
        data: salesData,
        isZoom: false,
        left: "dataMin",
        right: "dataMax",
        refAreaLeft: "",
        refAreaRight: "",
        top: `dataMax+${this.amountOffset}`,
        bottom: `dataMin-${this.amountOffset}`,
        top2: `dataMax+${this.totalSalesOffset}`,
        bottom2: `dataMin-${this.totalSalesOffset}`,
        animation: true
    };
  };

  getAxisYDomain (
    data: any,
    from: string,
    to: string,
    ref: string,
    offset: number,
    isZoom: boolean
  ) {
    
    debugger;
    let start = data.findIndex((sale: any) => sale.formatDate === from);
    let end = data.findIndex((sale: any) => sale.formatDate === to);
    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
    }

    const refData: any[] = data.slice(start, end + 1)    
    let [bottom, top] = [refData[0][ref], refData[0][ref]];
    
    refData.forEach((d) => {
      if (d[ref] > top)  {
        top = d[ref];
      }

      if (d[ref] < bottom) {
        bottom = d[ref];
      }
    });

    this.setState(() => ({
        data: refData,
        isZoom: isZoom
    }));
    return [Math.round(top + offset), Math.round(bottom - offset)];
  };

  zoom() {
    let { refAreaLeft, refAreaRight } = this.state;
    if (refAreaLeft === refAreaRight || refAreaRight === "") {
      this.setState(() => ({
        refAreaLeft: "",
        refAreaRight: ""
      }));
      return;
    }
    
    const {salesData} = this.props;
    let { data, isZoom } = this.state;
    if (refAreaLeft > refAreaRight) {
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];
    }

    const [top, bottom] = this.getAxisYDomain(!isZoom ? salesData : data, refAreaLeft, refAreaRight, "amount", this.amountOffset, false);
    const [top2, bottom2] = this.getAxisYDomain(
        !isZoom ? salesData : data,
        refAreaLeft,
        refAreaRight,
        "totalSales",
        this.totalSalesOffset,
        true
    );

    this.setState(() => ({
      refAreaLeft: "",
      refAreaRight: "",
      left: refAreaLeft,
      right: refAreaRight,
      top,
      bottom,
      top2,
      bottom2
    }));
  }

  zoomOut() {
    const { salesData } = this.props;
    this.setState(() => ({
      isZoom: false,
      data: salesData.slice(),
      refAreaLeft: "",
      refAreaRight: "",
      left: "dataMin",
      right: "dataMax",
      top: `dataMax+${this.amountOffset}`,
      bottom: `dataMin-${this.amountOffset}`,
      top2: `dataMax+${this.totalSalesOffset}`,
      bottom2: `dataMin-${this.totalSalesOffset}`
    }));
  }

  render(): React.ReactNode {
    const {salesData } = this.props;
    
    let {
        data,
        left,
        right,
        refAreaLeft,
        refAreaRight,
        top,
        bottom,
        top2,
        bottom2,
        isZoom,
    } = this.state;

    if (data.length === 0 || !isZoom) {
        data = salesData;
    }

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
                    <YAxis allowDataOverflow label={{value: "Dollars", angle: -90, position: "insideLeft"}} type={'number'} dataKey="amount" tickFormatter={DataFormatter} orientation={"left"} yAxisId={0} domain={[bottom, top]}/>
                    <YAxis allowDataOverflow type={'number'} label={{value: "Quantity", angle: 90, position: "insideRight"}} dataKey="totalSales" orientation={"right"} yAxisId={1} domain={[bottom2, top2]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" name="total amount of sales" barSize={15} fill="#8884d8" yAxisId={0} animationDuration={300} />
                    <Line type={'linear'} dataKey="totalSales" name="total sales" stroke="#ff7300" yAxisId={1} animationDuration={300} />
                    {refAreaLeft && refAreaRight ? (
                        <ReferenceArea
                        yAxisId="0"
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

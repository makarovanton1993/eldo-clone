import React, { useCallback, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import styles from "sliderMultiRange.module.scss"
const SliderMultiRange = styled.div`
    
`
const RangeInput = styled.input < any>`
pointer-events: none;
    position: absolute;
    height: 0px;
    width:335px;
  /* width:200px;
    height:25px;
    border-radius:50%;
    border:3px solid #208a00;
    position:absolute;
    z-index:-1;
    background-color:#fff; */
    z-index:${({ thumbLeft }) => thumbLeft && '3'};
    z-index:${({ thumbRight }) => thumbRight && '4'};
    left:${({ thumbLeft }) => thumbLeft && '0'};
    right:${({ thumbRight }) => thumbRight && '0px'};
`

const SliderMiltiRange = ({ min, max, onChange }: any) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}% `;
            range.current.style.width = `${maxPercent - minPercent}% `;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}% `;
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        //onChange({ min: minVal, max: maxVal });
        //console.log("minVal, maxVal:", minVal, maxVal);
        console.log("min:", minVal, " max:", maxVal);
    }, [minVal, maxVal, onChange]);

    return (
        <SliderMultiRange>
            <RangeInput
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={(event: any) => {
                    const value = Math.min(Number(event.target.value), maxVal);
                    setMinVal(value);
                    minValRef.current = value;
                }}
                thumbLeft={true}
                style={{ zIndex: minVal > max - 100 && "5" }}
            />
            <RangeInput
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={(event: any) => {
                    const value = Math.max(Number(event.target.value), minVal);
                    setMaxVal(value);
                    maxValRef.current = value;
                }}
                thumbRight={true}
            />

            <div className="slider">
                <div className="slider__track" />
                <div ref={range} className="slider__range" />
            </div>
            <div className="values">
                <div className="slider__left-value">{minVal}</div>
                <div className="slider__right-value">{maxVal}</div>
            </div>
        </SliderMultiRange>
    )
}

export default SliderMiltiRange
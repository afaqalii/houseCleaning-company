import {
    ReactCompareSlider,
    ReactCompareSliderHandle,
    ReactCompareSliderImage
  } from "react-compare-slider";
  

export const ComparisonSlider = ({ style, ...props }) => {

    return (
      <ReactCompareSlider
        {...props}
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backdropFilter: undefined,
              background: "white",
              border: 0,
              color: "#333"
            }}
          />
        }
        itemOne={
          <ReactCompareSliderImage
            src="https://images.unsplash.com/photo-1580458148391-8c4951dc1465?auto=format&fit=crop&w=1280&q=80"
            style={{ filter: "grayscale(1)" }}
            alt="one"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="https://images.unsplash.com/photo-1580458148391-8c4951dc1465?auto=format&fit=crop&w=1280&q=80"
            alt="two"
          />
        }
        style={{
          ...style
        }}
        className="flex w-full h-[50vh] md:h-[80vh]"
      />
    );
  };
  
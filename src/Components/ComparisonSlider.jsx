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
            src="https://www.communityroofingandrestoration.com/wp-content/uploads/2020/11/old-roof-and-windows.jpg"
            alt="one"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="https://www.iko.com/blog/wp-content/uploads/sites/10/2022/12/roof-with-dormers-and-shingles.webp"
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
  
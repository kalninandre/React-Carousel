### A complete carousel made by me using the react framework

To get started, run the command:

```npm install```

Then you can add new features or remove unwanted ones.

The 'App.tsx' file consists of just a simple use of Carousel.

The component in its current state is in a good position with mobiles and tablets.

```
type CarouselType = {
width: string;
height: string;

data: CarouselItemsType[];

showThumbnails?: boolean;

showDots?: boolean;
sizeDot?: string;
dotColor?: string;
dotHoverColor?: string;
dotActiveColor?: string;

showArrow?: boolean;
arrowSize?: string;
arrowColor?: string;
arrowHoverColor?: string;

autoplay?: boolean;
autoPlayTimer?: number;
};

type CarouselItemsType = {
url: string;
alt:string;
};
```

These are all the properties you can find in the component. In my point of view, the variable are very declarative, so you can expect them to actually do what is described in their names.

You can find some images below:

![MainImage](./images/MainImage.png)

![MainImage2](./images/MainImage2.png)
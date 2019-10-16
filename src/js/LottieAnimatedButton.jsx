import Lottie from 'lottie-web';
import EkoUIComponents from 'EkoUIComponents';

// Configure Lottie. You need to do this only once. Read more here:
// https://developer.helloeko.com/docs/howto/svgs_and_lottie.html#Using-Lottie-Elements
Lottie.setLocationHref(window.location.href);

export default class LottieAnimatedButton extends EkoUIComponents.EkoDecisionButton {
    componentDidMount(){
        // generate a new Lottie instance with the animation path passed in the props
        this.animation = Lottie.loadAnimation({
            container: this.containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: this.props.lottieData,
        });
    }

    componentWillUnmount(){
        // release resources
        this.animation.destroy();
    }

    getContent(){
        return null;
    }
}

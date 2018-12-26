import Lottie from 'lottie-web';
import EkoUIComponents from 'EkoUIComponents';

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

    componentWillUnMount(){
        // release resources
        this.animation.destroy();
    }

    getContent(){
        return null;
    }
}
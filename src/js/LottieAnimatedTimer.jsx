import Lottie from 'lottie-web';
import EkoUIComponents from 'EkoUIComponents';

// Configure Lottie. You need to do this only once. Read more here:
// https://developer.helloeko.com/docs/howto/svgs_and_lottie.html#Using-Lottie-Elements
Lottie.setLocationHref(window.location.href);

export default class LottieAnimatedTimer extends EkoUIComponents.EkoButton{
    componentDidMount(){

        // generate a new Lottie instance with the animation path passed in the props
        this.animation = Lottie.loadAnimation({
            container: this.containerRef.current,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: this.props.lottieData,
        });

        this.isActive = true;
        this.onRAF = this.onRAF.bind(this);
        this.onRAF();
    }

    componentWillUnmount(){
        this.isActive = false;

        // release resources
        this.animation.destroy();
    }

    onRAF(){
        if (this.isActive) {
            let decisionProgress = player.decision.get(player.currentNodeId).progress;
            let frameNum = Math.round(decisionProgress * this.animation.totalFrames);
            this.animation.goToAndStop(frameNum, true);
            window.requestAnimationFrame(this.onRAF);
        }
    }

    getContent(){
        return null;
    }
}

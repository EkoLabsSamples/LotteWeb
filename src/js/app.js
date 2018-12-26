import playerOptions from '../config/playerOptions.json';
import LottieAnimatedButton from './LottieAnimatedButton';
import LottieAnimatedTimer from './LottieAnimatedTimer';

import buttonAnimation1 from '../lottieAnimations/alebrije.json';
import buttonAnimation2 from '../lottieAnimations/day_of_the_dead_skull.json';
import buttonAnimation3 from '../lottieAnimations/grave.json';
import timerAnimation from '../lottieAnimations/splashy_loader.json';


export default {
    onLoad: function(ctx) { },

    onInit: function(player, ctx) {

        // buttons
        player.ui.override("button_beginning_e3bdbd",
            LottieAnimatedButton,
            {
                lottieData: buttonAnimation1
            });

        player.ui.override("button_beginning_34a305",
            LottieAnimatedButton,
            {
                lottieData: buttonAnimation2
            });

        player.ui.override("button_beginning_6c2e1e",
            LottieAnimatedButton,
            {
                lottieData: buttonAnimation3
            });

        // timer
        player.ui.override("timer_beginning_851a3e",
            LottieAnimatedTimer,
            {
                lottieData: timerAnimation
            });



    },

    playerOptions
};

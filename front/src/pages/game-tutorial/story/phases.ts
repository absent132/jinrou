import { Phase } from './defs';
import { inSequence } from '../../../util/function-composer';
import { humanRole } from './roleInfo';
import { setPriority } from 'os';

export const phases: Partial<Record<number, Phase>> = {
  0: {
    // Initial phase: automatically proceed
    async step(driver) {
      await driver.messageDialog({
        message: driver.t('phase0.stepMessage'),
      });
      return 1;
    },
    getStory() {
      return {};
    },
  },
  1: {
    // Phase 1: speak as audience
    async step(driver) {
      await driver.sleep(1000);
      driver.addLog({
        mode: 'prepare',
        name: driver.t('guide.name'),
        comment: driver.t('phase1.stepMessage1'),
      });
      await driver.sleep(3000);
      driver.addLog({
        mode: 'prepare',
        name: driver.t('guide.name'),
        comment: driver.t('phase1.stepMessage2'),
      });
      return 2;
    },
    getStory(driver) {
      return {
        gameInput: {
          // go to next step if user speaks
          onSpeak: inSequence(driver.getSpeakHandler(), driver.step),
        },
      };
    },
  },
  2: {
    // Phase 2: enter the room
    async step(driver) {
      driver.join();
      await driver.sleep(1000);
      driver.addLog({
        mode: 'prepare',
        name: driver.t('guide.name'),
        comment: driver.t('phase2.stepMessage1'),
      });
      await driver.sleep(2500);
      driver.addLog({
        mode: 'prepare',
        name: driver.t('guide.name'),
        comment: driver.t('phase2.stepMessage2'),
      });
      return 3;
    },
    getStory(driver) {
      return {
        gameInput: {
          onSpeak: driver.getSpeakHandler(),
        },
        roomHedaerInput: {
          join: inSequence(driver.getJoinHandler(), driver.step),
        },
      };
    },
  },
  3: {
    // Phase 3: get ready
    async step(driver) {
      driver.ready(true);
      await driver.sleep(1000); // TODO: change to 10s
      // add 5 more players
      for (let i = 0; i < 5; i++) {
        const realid = `身代わりくん${i + 2}`;
        driver.addPlayer({
          id: realid,
          realid,
          name: driver.t('guide.name') + (i + 2),
          anonymous: false,
          icon: null,
          winner: null,
          jobname: null,
          dead: false,
          flags: ['ready'],
          emitLog: true,
        });
        await driver.sleep(150);
      }
      return 4;
    },
    getStory(driver) {
      return {
        gameInput: {
          onSpeak: driver.getSpeakHandler(),
        },
        roomHedaerInput: {
          join: driver.getJoinHandler(),
          unjoin: driver.getUnjoinHandler(),
          ready: () => {
            const newReady = driver.ready();
            if (newReady) {
              driver.step();
            } else {
              driver.cancelStep();
            }
          },
          helper: driver.getRejectionHandler(),
        },
      };
    },
  },
  4: {
    // Phase 4: automatically start game
    init(driver) {
      driver.step();
    },
    async step(driver) {
      await driver.sleep(600);
      driver.addLog({
        mode: 'prepare',
        name: driver.t('guide.name'),
        comment: driver.t('phase4.stepMessage1'),
      });
      await driver.sleep(5000);
      driver.setRoleInfo(humanRole(driver.t, true));
      driver.changeGamePhase({
        day: 1,
        night: true,
        gameStart: true,
        timer: {
          enabled: true,
          name: driver.t('game:phase.night'),
          target: Date.now() + 30000,
        },
      });
      return 5;
    },
    getStory(driver) {
      return {
        roomHedaerInput: {
          ready: () => {
            const newReady = driver.ready();
            if (!newReady) {
              driver.cancelStep();
            } else {
              driver.step();
            }
          },
        },
      };
    },
  },
  5: {
    // Phase 5: game stared
    init(driver) {
      driver.step();
    },
    async step(driver) {
      await driver.sleep(3e3);
      driver.addLog({
        mode: 'gm',
        name: driver.t('roles:jobname.GameMaster'),
        comment: driver.t('phase5.stepMessage1'),
      });
      await driver.sleep(27e3);
      driver.killPlayer('身代わりくん', 'normal');
      driver.changeGamePhase({
        day: 2,
        night: false,
        timer: {
          enabled: true,
          name: driver.t('game:phase.day'),
          target: Date.now() + 330e3,
        },
      });
      driver.setRoleInfo(humanRole(driver.t, false));
      await driver.sleep(2e3);
      driver.addLog({
        mode: 'gm',
        name: driver.t('roles:jobname.GameMaster'),
        comment: driver.t('phase5.stepMessage2'),
      });
      await driver.sleep(1e3);
      driver.addLog({
        mode: 'gm',
        name: driver.t('roles:jobname.GameMaster'),
        comment: driver.t('phase5.stepMessage3'),
      });
      return 6;
    },
    getStory(driver) {
      return {
        gameInput: {
          onSpeak: driver.getSpeakHandler(),
        },
      };
    },
  },
  6: {
    // Phase 6: during day 2
    async step(driver) {},
    getStory(driver) {
      return {
        gameInput: {
          onSpeak: driver.getSpeakHandler(),
        },
      };
    },
  },
};

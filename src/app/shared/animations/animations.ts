import {
  animate,
  animateChild,
  group,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('180ms ease-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('140ms ease-in', style({ opacity: 0 })),
  ]),
]);

export const routeFade = trigger('routeFade', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter', [style({ opacity: 0, transform: 'translateY(6px)' })], {
      optional: true,
    }),
    query(':leave', [style({ opacity: 1 })], { optional: true }),
    group([
      query(
        ':leave',
        [animate('120ms ease-in', style({ opacity: 0 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [animate('220ms 60ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))],
        { optional: true }
      ),
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
]);

export const listStagger = trigger('listStagger', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(12px) scale(0.98)' }),
        stagger('60ms', [
          animate('260ms ease-out', style({ opacity: 1, transform: 'translateY(0) scale(1)' })),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

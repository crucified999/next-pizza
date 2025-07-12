export type AppHeaderUIProps = {
  price: number;
  counter: number;
  isAuthorized: boolean;
  onHover: () => void;
  onLeave: () => void;
  isProfileMenuShown: boolean;
}
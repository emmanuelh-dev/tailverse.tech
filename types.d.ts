interface ToastOptions {
  className: string;
  duration: number;
  style: {
    background: string;
    color: string;
  };
  success?: {
    duration?: number;
    theme?: {
      primary: string;
      secondary: string;
    };
  };
}
interface Options {
  title: string | number;
  value: string | boolean | number;
}
interface SelectDropdownProps {
  value: string | number | boolean;
  title: string | number;
  setValue: any;
  setTitle: any;
  options: Options[];
}
export interface Component {
  source: string;
  author: string;
  type: string;
  rate: number;
  name: string;

  children?: React.ReactNode;
}
export interface Components extends Component {
  id: number;
 }
export interface NewComponent extends Component {
  name: string;
}

type User = {
  username: string;
  name: string;
  email: string;
  id: number;
  component_count: number;
};

type Props = {
  users: User[];
  components: Component[];
};

type Props = {
  components: Component[];
};

type Params = {
  id: string;
};

type StaticProps = {
  props: Props;
};


declare module "react-hot-toast" {
  export const toast: any;
  export const Toaster: any;
}

import { ReactNode } from 'react';
import { CgDanger } from 'react-icons/cg';
import { AiOutlineInfoCircle, AiOutlineWarning } from 'react-icons/ai';
import { BsFillHandIndexFill } from 'react-icons/bs';

interface Alert {
  type: string;
  title: string;
  icon: ReactNode;
  desc: string;
}

export const data: Alert[] = [
  {
    type: "alert-default",
    title: "Alert Default",
    icon: <CgDanger />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, distinctio sit earum voluptas dolorem corporis, perspiciatis id, iste voluptatem asperiores iusto deserunt nesciunt. Possimus harum magni dignissimos dolorum? Quasi praesentium necessitatibus veritatis illum eveniet officiis a ab, deleniti aliquam minima.",
  },
  {
    type: "alert-error",
    title: "Alert Error",
    icon: <CgDanger />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, distinctio sit earum voluptas dolorem corporis, perspiciatis id, iste voluptatem asperiores iusto deserunt nesciunt. Possimus harum magni dignissimos dolorum? Quasi praesentium necessitatibus veritatis illum eveniet officiis a ab, deleniti aliquam minima.",
  },
  {
    type: "alert-info",
    title: "Alert Info",
    icon: <AiOutlineInfoCircle />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, distinctio sit earum voluptas dolorem corporis, perspiciatis id, iste voluptatem asperiores iusto deserunt nesciunt. Possimus harum magni dignissimos dolorum? Quasi praesentium necessitatibus veritatis illum eveniet officiis a ab, deleniti aliquam minima.",
  },
  {
    type: "alert-success",
    title: "Alert Success",
    icon: <BsFillHandIndexFill />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, distinctio sit earum voluptas dolorem corporis, perspiciatis id, iste voluptatem asperiores iusto deserunt nesciunt. Possimus harum magni dignissimos dolorum? Quasi praesentium necessitatibus veritatis illum eveniet officiis a ab, deleniti aliquam minima.",
  },
  {
    type: "alert-warning",
    title: "Alert Warning",
    icon: <AiOutlineWarning />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, distinctio sit earum voluptas dolorem corporis, perspiciatis id, iste voluptatem asperiores iusto deserunt nesciunt. Possimus harum magni dignissimos dolorum? Quasi praesentium necessitatibus veritatis illum eveniet officiis a ab, deleniti aliquam minima.",
  },
];
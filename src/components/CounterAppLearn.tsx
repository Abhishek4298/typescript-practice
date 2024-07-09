
type Props = {
  title: string;
  initialValue:number
};

const CounterAppLearn = (props: Props) => {
    const fname:string = "Abhiii"

    return <div>CounterAppLearn{fname} {props.title}</div>;
};

export default CounterAppLearn;

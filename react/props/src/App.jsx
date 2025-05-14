import { Button } from './components/Button';

export function App() {
  return (
    <>
    <h1>Props e Children em React</h1>

    <hr />
    <h3>Props</h3>

    <Button />
    <Button className="btn-default" />
    <Button className="btn-success" />
    <Button className="btn-warning" />
    <Button className="btn-danger" />
    </>
  );
}
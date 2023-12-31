import { Entry } from '../../types';

type Props = { entry: Entry };

const BaseEntry = ({ entry }: Props) => {
  return (
    <div>
      <div>Description: {entry.description}</div>
      <div>Date: {entry.date}</div>
      <div>Specialist: {entry.specialist}</div>
      <div>
        {entry.diagnosisCodes &&
          entry.diagnosisCodes.map((code, index) => (
            <div key={index}>{code}</div>
          ))}
      </div>
    </div>
  );
};

export default BaseEntry;

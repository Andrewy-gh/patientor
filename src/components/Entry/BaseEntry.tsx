import { Entry } from '../../types';

type Props = { entry: Entry; children: React.ReactNode };

const BaseEntry = ({ entry, children }: Props) => {
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
      {children}
    </div>
  );
};

export default BaseEntry;

import { Entry as EntryType } from '../../types';
import BaseEntry from './BaseEntry';
// import Hospital from './Hospital';

type Props = { entry: EntryType };

const Entry = ({ entry }: Props) => {
  switch (entry.type) {
    case 'Hospital':
      return (
        <>
          <h4>{entry.type}</h4>
          <BaseEntry entry={entry}>
            <div>
              <div>Discharge date: {entry.discharge.date}</div>
              <div>Discharge criteria: {entry.discharge.criteria}</div>
            </div>
          </BaseEntry>
        </>
      );
    case 'OccupationalHealthcare':
      return (
        <>
          <h4>{entry.type}</h4>
          <BaseEntry entry={entry}>
            <div>Employer: {entry.employerName}</div>
            {entry.sickLeave && (
              <div>
                <div>Sick leave start date: {entry.sickLeave.startDate}</div>
                <div>Sick leave end date {entry.sickLeave.endDate}</div>
              </div>
            )}
          </BaseEntry>
        </>
      );
    case 'HealthCheck':
      return (
        <>
          <h4>{entry.type}</h4>
          <BaseEntry entry={entry}>
            <div>Health check Rating: {entry.healthCheckRating}</div>
          </BaseEntry>
        </>
      );
    default:
      return (
        <BaseEntry entry={entry}>
          <></>
        </BaseEntry>
      );
  }
};

export default Entry;

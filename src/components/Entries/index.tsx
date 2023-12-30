import { Entry as EntryType } from '../../types';
import Entry from '../Entry';

type Props = { entries: EntryType[] };

const Entries = ({ entries }: Props) => {
  return (
    <section>
      {entries.length > 0 && <h3>Entries</h3>}
      {entries.map((entry) => (
        <Entry key={entry.id} entry={entry} />
      ))}
    </section>
  );
};

export default Entries;

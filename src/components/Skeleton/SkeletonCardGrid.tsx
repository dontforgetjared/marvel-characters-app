import Grid from '../Layout/Grid';
import SkeletonCard from './SkeletonCard';

interface ISkeletonCardGridP {
  cardCount?: number;
}

function SkeletonCardGrid({ cardCount = 1 }: ISkeletonCardGridP) {
  const cards = [...Array(cardCount)].map((_, i) => i);

  return (
    <Grid>
      {cards.map((card) => (
        <SkeletonCard key={`card_${card}`} />
      ))}
    </Grid>
  );
}

export default SkeletonCardGrid;

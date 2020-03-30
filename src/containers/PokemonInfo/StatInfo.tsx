import React from 'react';
import { Stat } from '../../types';
import capitalize from 'lodash/capitalize';
import FilledBar from '../../components/FilledBar';

type Props = {
    stat: Stat;
};

const StatInfo: React.FC<Props> = ({ stat }: Props) => {
    return (
        <li>
            <span className="stat-title">
                <b>{stat.stat.name.split('-').map(capitalize).join(' ')} :</b> {stat.base_stat}
            </span>
            <FilledBar max={255} fill={stat.base_stat} />
            {stat.effort > 0 && `(+${stat.effort})`}
        </li>
    );
};

export default StatInfo;

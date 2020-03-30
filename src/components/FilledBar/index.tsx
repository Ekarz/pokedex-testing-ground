import React from 'react';
import './index.scss';

type Props = {
    max: number;
    fill: number;
};

const FilledBar: React.FC<Props> = ({ max, fill }: Props) => {
    return (
        <div className="FilledBar bar" title={`${fill}/${max}`}>
            <div className="filled-part bar" style={{ width: (fill / max) * 150 }} />
        </div>
    );
};

export default FilledBar;

// CircularDeterminate.tsx

"use client";

import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

interface CircularDeterminateProps {
    progress: number; // Prop pour la valeur de progression
}

export default function CircularDeterminate({ progress }: CircularDeterminateProps) { // Utilisation de la prop progress

    return (
        <Stack spacing={2} direction="row" justifyContent="center" alignItems="center" style={{ height: '100%' }}>
            <CircularProgress variant="determinate" value={progress} />
            <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '10%', height: '100%' }}>
                <span style={{ marginLeft: '-15px', fontSize: '12px'}}>{progress}%</span>
            </div>
        </Stack>
    );
}

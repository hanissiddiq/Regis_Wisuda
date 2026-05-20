<?php

namespace App\Filament\Resources\GraduationFees\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Forms\Components;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;


class GraduationFeeForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                //
                Forms\Components\Select::make('faculty_id')
                    ->relationship('faculty', 'name')
                    ->searchable()
                    ->preload()
                    ->reactive()
                    ->afterStateUpdated(fn (callable $set) => $set('jurusan_id', null))
                    ->required(),

                // Forms\Components\Select::make('jurusan_id')
                //     ->relationship('jurusan', 'name')
                //     ->searchable()
                //     ->preload()
                //     ->required(),

                Forms\Components\Select::make('jurusan_id')
                    ->label('Jurusan')
                    ->options(function (Get $get) {

                        $facultyId = $get('faculty_id');

                        if (!$facultyId) {
                            return [];
                        }

                        return \App\Models\Jurusan::where('faculty_id', $facultyId)
                            ->pluck('name', 'id');

                    })
                    ->searchable()
                    ->preload()
                    ->required(),

                Forms\Components\TextInput::make('amount')
                    ->label('Biaya')
                    ->numeric()
                    ->prefix('Rp')
                    ->required(),

                Forms\Components\TextInput::make('year')
                    ->numeric()
                    ->default(now()->year)
                    ->required(),
            ]);
    }
}

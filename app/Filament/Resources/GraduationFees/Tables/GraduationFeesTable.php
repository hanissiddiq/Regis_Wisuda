<?php

namespace App\Filament\Resources\GraduationFees\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
// use Filament\Tables\TextColumn;


class GraduationFeesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                //
                TextColumn::make('faculty.name')
                    ->label('Fakultas')
                    ->searchable(),

                TextColumn::make('jurusan.name')
                    ->label('Jurusan')
                    ->searchable(),

                TextColumn::make('amount')
                    ->label('Biaya')
                    ->money('IDR', locale: 'id'),

                TextColumn::make('year')
                    ->label('Tahun'),

                TextColumn::make('created_at')
                    ->dateTime('d M Y H:i'),
            ])
            ->filters([
                //
            ])
            ->recordActions([

                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}

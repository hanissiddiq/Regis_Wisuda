<?php

namespace App\Filament\Resources\Faculties\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;

class FacultiesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                 TextColumn::make('name')
                    ->label('Nama Fakultas')
                    ->searchable(),

                TextColumn::make('code')
                    ->label('Kode'),

                TextColumn::make('created_at')
                    ->dateTime('d M Y H:i'),
            ])
            ->filters([
                //
            ])
            ->striped()
            ->defaultSort('id', 'desc')
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

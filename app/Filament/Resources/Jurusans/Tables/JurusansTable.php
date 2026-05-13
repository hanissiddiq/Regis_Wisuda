<?php

namespace App\Filament\Resources\Jurusans\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;

class JurusansTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                
                TextColumn::make('faculty.name')
                    ->label('Fakultas')
                    ->searchable(),

                TextColumn::make('name')
                    ->label('Jurusan')
                    ->searchable(),

                TextColumn::make('code')
                    ->label('Kode'),

                TextColumn::make('created_at')
                    ->dateTime('d M Y H:i'),])

            
            ->striped()
            ->defaultSort('id', 'desc')
            
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

<?php

namespace App\Filament\Resources\Registrations\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Tables\Table;

use Filament\Tables\Columns\TextColumn;

class RegistrationsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                //
                TextColumn::make('id')->sortable()->searchable(),
                TextColumn::make('registration_number')->sortable()->searchable(),
                TextColumn::make('payment.order_id')->label('Order ID')->sortable()->searchable(),
                TextColumn::make('name')->sortable()->searchable(),
                TextColumn::make('nim')->sortable()->searchable(),
                TextColumn::make('jurusan.name')->sortable()->searchable(),
                // TextColumn::make('fakultas.name')->sortable()->searchable(),
                TextColumn::make('status')->sortable()->searchable(),
                TextColumn::make('status')
                ->label('Status')

                ->formatStateUsing(function ($state) {

                    return match ($state) {

                        'waiting_payment' => 'Waiting for Payment',
                        'paid' => 'Paid',
                        
                        default => $state ?? '-',
                    };

                })
                ->badge()

                    ->formatStateUsing(function ($state) {

                        return match (strtolower($state)) {

                            'paid' => 'Paid',
                            'waiting_payment' => 'Waiting for Payment',
                            'cancel' => 'Cancel',
                            'expire' => 'Expire',

                            default => strtoupper($state),
                        };
                    })

                    ->color(function ($state) {

                        return match (strtolower($state)) {

                            'paid' => 'success', // green
                            'waiting_payment' => 'warning',   // yellow
                            'cancel' => 'danger',     // red
                            'expire' => 'danger',     // red

                            default => 'gray',
                        };
                    })
                ->searchable()->sortable(),
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

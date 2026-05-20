<?php

namespace App\Filament\Resources\Payments\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Tables\Columns\BadgeColumn;
// use Filament\Tables\Columns\

class PaymentsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                //
                TextColumn::make('order_id')
                    ->label('Order ID')
                    ->searchable(),
                TextColumn::make('registration.registration_number')
                    ->label('Registration Number')
                    ->searchable(),
                TextColumn::make('registration.name')
                    ->label('Name')
                    ->searchable(),

                // TextColumn::make('payment_type')
                //     ->label('Payment Type')
                //     ->searchable(),

                TextColumn::make('payment_type')
                ->label('Payment Type')

                ->formatStateUsing(function ($state) {

                    return match ($state) {

                        'bank_transfer' => 'Bank Transfer',
                        'echannel' => 'Virtual Account',
                        'gopay' => 'GoPay',
                        'qris' => 'QRIS',
                        'credit_card' => 'Kartu Kredit',

                        default => $state ?? '-',
                    };
                })
                ->searchable(),

                TextColumn::make('gross_amount')
                    ->label('Gross Amount')
                    ->money('IDR', locale: 'id')
                    ->searchable(),
                // TextColumn::make('transaction_status')
                //     ->label('Transaction Status')
                //     ->searchable(),

                TextColumn::make('transaction_status')
                    ->label('Transaction Status')
                    ->badge()

                    ->formatStateUsing(function ($state) {

                        return match (strtolower($state)) {

                            'settlement' => 'SUCCESS',
                            'pending' => 'PENDING',
                            'cancel' => 'CANCEL',
                            'expire' => 'EXPIRED',

                            default => strtoupper($state),
                        };
                    })

                    ->color(function ($state) {

                        return match (strtolower($state)) {

                            'settlement' => 'success', // green
                            'pending' => 'warning',   // yellow
                            'cancel' => 'danger',     // red
                            'expire' => 'danger',     // red

                            default => 'gray',
                        };
                    })

                    ->searchable(),


            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make()
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}

<?php

namespace App\Filament\Resources\GraduationFees;

use App\Filament\Resources\GraduationFees\Pages\CreateGraduationFee;
use App\Filament\Resources\GraduationFees\Pages\EditGraduationFee;
use App\Filament\Resources\GraduationFees\Pages\ListGraduationFees;
use App\Filament\Resources\GraduationFees\Schemas\GraduationFeeForm;
use App\Filament\Resources\GraduationFees\Tables\GraduationFeesTable;
use App\Models\GraduationFee;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class GraduationFeeResource extends Resource
{
    protected static ?string $model = GraduationFee::class;

    // protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCurrencyDollar;
    // protected static string|BackedEnum|null $navigationIcon = Heroicon::heroicon-o-banknotes;

    protected static ?string $recordTitleAttribute = 'Graduation Fee';

    public static function form(Schema $schema): Schema
    {
        return GraduationFeeForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return GraduationFeesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListGraduationFees::route('/'),
            'create' => CreateGraduationFee::route('/create'),
            'edit' => EditGraduationFee::route('/{record}/edit'),
        ];
    }
}

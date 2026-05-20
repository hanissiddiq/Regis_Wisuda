<?php

namespace App\Filament\Resources\GraduationFees\Pages;

use App\Filament\Resources\GraduationFees\GraduationFeeResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditGraduationFee extends EditRecord
{
    protected static string $resource = GraduationFeeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
